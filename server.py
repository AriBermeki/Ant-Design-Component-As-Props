from fastapi import FastAPI, WebSocket
from fastapi.responses import Response
from fastapi.requests import Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from socketio import AsyncServer, ASGIApp
from pathlib import Path
from typing import TYPE_CHECKING, Any, Awaitable, Callable, Dict, Iterator, List, Optional, Union
from fastapi_socketio import SocketManager
import json
from event_listener import event_listener
from element import Element 
from client import Client, Page

index_page = Page('/', 'Index Page', lambda: 'Hello, World!')
index_client = Client(index_page, shared=True).__enter__()

import asyncio

app = FastAPI()

# Statische Dateien und Templates konfigurieren
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# SocketIO-Server erstellen
socket_manager = SocketManager(app=app, mount_location='/socket/', json=json)
sio: AsyncServer = socket_manager._sio



@app.get('/')
def index(request: Request) -> Response:
    return index_client.build_response(request)

# FastAPI-Routing für die Startseite
@app.on_event('startup')
def handle_startup(with_welcome_message: str = 'Server Started on the port 8000') -> None:

    return with_welcome_message



# SocketIO-Handler
@sio.event
async def connect(sid, environ):
    print(f"Verbunden: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Getrennt: {sid}")




@sio.on('event')
def handle_event(sid: str, msg: Dict) -> None:
    print(msg)

