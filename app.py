from fastapi import FastAPI, WebSocket, HTTPException, status
from fastapi.requests import Request
from fastapi.responses import Response, HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.gzip import GZipMiddleware
from fastapi_socketio import SocketManager
from socketio import AsyncServer
from pathlib import Path
import json
from typing import Union, DefaultDict, Dict, List, Any
from fastapi.middleware.cors import CORSMiddleware


app =FastAPI()
#templates = Jinja2Templates(Path(__file__).parent / 'karinui/public')
socket_manager = SocketManager(app=app, mount_location='/_hybrid_ws/', json=json)
sio = socket_manager._sio
app.add_middleware(GZipMiddleware)
#app.mount('/static', StaticFiles(directory=Path(__file__).parent / 'static'), name='static')
socket_extra_headers: Dict[str, Any] = {}
origins =  [
    '*'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


@app.get("/")
async def read_root():
    button = [
        { "type": "Button" },
        
        ]
    return button



# @app.get('/')
# async def index(request: Request, status_code: int = 200, response_class=HTMLResponse)->Response:

#     prefix = request.headers.get('X-Forwarded-Prefix', request.scope.get('root_path', ''))
#     return templates.TemplateResponse('index.html', {
#                                                     'request': request,
#                                                     'prefix': prefix,
#                                                     'viewport':viewport,
#                                                     'title':title,
#                                                     'client_id': 1,
#                                                     'elements': layout.to_json(),
#                                                     'favicon': favicon,
#                                                     'socket_io_js_extra_headers': socket_extra_headers,
#                                                 }, status_code, {'Cache-Control': 'no-store', 'X-NiceGUI-Content': 'page'})

@sio.on("handshake")
async def connect(sid):
    print(f"Client {sid} connected")
    return 'ok'

@sio.on("disconnect")
async def disconnect(sid):
    print(f"Client {sid} disconnected")

@sio.on("message")
async def received_message(sid: str, data: Dict) -> None:
    print(f"Received message from client {sid}: {data}")
    await socket_manager.emit("response", f"Received your message: {data}", to=sid)

# @sio.on("base_event")
# async def handle_event(sid: str, msg: Dict) -> None:
#     print(f"Received message from client {sid}: {msg}")
#     print(msg['message'])
    
#     if 'callback_uuid' in msg and 'args' in msg:
#         if msg['callback_uuid'] and msg['args'] is not None:
#             callbackRegistry.make_callback(msg['callback_uuid'], msg['args'])
#         elif msg['callback_uuid'] is not None:
#             callbackRegistry.make_callback(msg['callback_uuid'])
#             else:
#         # Handhabung, wenn 'callback_uuid' oder 'args' nicht im 'msg'-Dictionary vorhanden sind


# print(msg)
