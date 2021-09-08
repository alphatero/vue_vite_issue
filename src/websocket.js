// export const ws = new WebSocket('ws://localhost:8000')
// export const ws = new WebSocket('ws://192.168.1.112:8000/ws')
// eslint-disable-next-line import/prefer-default-export
export const ws = new WebSocket(window.ip);
