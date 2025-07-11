import WebSocket from 'ws';

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws: WebSocket) => {
  console.log('WebSocket client connected');

  ws.on('message', (message: string) => {
    console.log('Received message:', message);
    // Handle incoming messages here
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

export default wss;