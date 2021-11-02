const origin = "http://localhost:3002";

const app = require('express')();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: { origin }});
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

app.get('/history.json', cors({ origin }), (req, res) => {
    res.json(messages);
});
