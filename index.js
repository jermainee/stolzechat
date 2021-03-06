const port = process.env.PORT || 3001;
const origin = process.env.ORIGIN || 'http://localhost:3001';

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: { origin }});
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

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
http.listen(port, () => {
    console.log(`Socket.IO server running at :${port}`);
});

app.get('/history.json', cors({ origin }), (req, res) => {
    res.json(messages);
});
