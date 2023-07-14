import json
import uuid
from typing import Callable, Union, List
import asyncio
from asyncio import Queue, Event as AsyncioEvent

class HtmlBaseEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, uuid.UUID):
            return str(obj)
        if isinstance(obj, Event):
            return str(obj)
        if isinstance(obj, EventTarget):
            return str(obj)
        if isinstance(obj, HIMLElement):
            obj_dict = obj.as_dict()
            return {k: obj_dict[k] for k in obj_dict if k != 'key'}
        return super().default(obj)

class HIMLElement:
    def __init__(self, tag: str):
        self.tag = tag
        self.elementidentifier = uuid.uuid4()
        self.props = {}
        self.events = EventTarget()
        self.children = None

    def set_prop(self, key: str, value: str) -> None:
        self.props[key] = value

    def remove_prop(self, key: str) -> None:
        if key in self.props:
            del self.props[key]

    def add_event_listener(self, type: str, listener: Callable) -> None:
        self.events.addEventListener(type, listener)

    def remove_event_listener(self, type: str, listener: Callable) -> None:
        self.events.removeEventListener(type, listener)

    def dispatch_event(self, event: 'Event') -> bool:
        return self.events.dispatchEvent(event, self)

    def as_dict(self) -> dict:
        data = {
            'identifier': str(self.elementidentifier),
            'tag': self.tag,
            'props': self.props,
            'events': {}
        }

        for event_type, listeners in self.events.listeners.items():
            data['events'][event_type] = [str(listener) for listener in listeners]

        return data
class Event:
    def __init__(self, type: str):
        self.type = type
        self.target = None
        self.srcElement = None
        self.currentTarget = None
        self.eventPhase = 0
        self.cancelBubble = False
        self.bubbles = False
        self.cancelable = False
        self.returnValue = False
        self.defaultPrevented = False
        self.composed = False
        self.isTrusted = False
        self.timeStamp = 0.0

    def stopPropagation(self):
        self.cancelBubble = True

    def stopImmediatePropagation(self):
        self.cancelBubble = True

    def preventDefault(self):
        self.defaultPrevented = True

    def composedPath(self):
        path = []
        # Add logic here to retrieve the event path
        return path

    def initEvent(self, type, bubbles=False, cancelable=False):
        self.type = type
        self.bubbles = bubbles
        self.cancelable = cancelable

class EventTarget:
    def __init__(self):
        self.listeners = {}
        self.event_queue = Queue()
        self.event_ready = AsyncioEvent()

    def addEventListener(self, type: str, listener: Callable) -> None:
        if type not in self.listeners:
            self.listeners[type] = []
        self.listeners[type].append(listener)

    def removeEventListener(self, type: str, listener: Callable) -> None:
        if type in self.listeners:
            self.listeners[type].remove(listener)

    async def dispatchEvent(self, event: Event, target_element: HIMLElement) -> bool:
        type = event.type
        if type in self.listeners:
            event.target = target_element
            for listener in self.listeners[type]:
                await self.event_queue.put((listener, event))
            self.event_ready.set()
            return True
        return False

    async def process_events(self):
        while True:
            await self.event_ready.wait()
            while not self.event_queue.empty():
                listener, event = await self.event_queue.get()
                listener(event)
            self.event_ready.clear()

def create_task(target: Callable, *args, **kwargs):
    loop = asyncio.get_event_loop()
    return loop.create_task(target(*args, **kwargs))



    