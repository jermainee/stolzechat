const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:3002",
    }
});
const port = process.env.PORT || 3001;
const messages = [];

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);

        messages.push(msg);

        if (messages.length > 100) {
            messages.shift();
        }

        console.log(msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

app.get('/history.json', (req, res) => {
    res.json(messages);
});
