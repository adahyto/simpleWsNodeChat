const port = 3000;
const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: port});
console.log(`You can connect on *:${port}`);
WSS.on('connection', (ws)=>{
    console.log("Connected");
    ws.on('message', (message)=>{
        console.log(message);
        if (message === 'close') {
            ws.close();
        }else{
            WSS.clients.forEach((client)=>{
            client.send(message);
            });
        }
    });
});
