const express = require('express')
const app = express();
var jwt = require('jsonwebtoken');


const env = require('dotenv');
env.config();

const { Server } = require("socket.io");
const http = require('http');
const server = http.createServer(app);

const io = new Server(server);

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    console.log(token);

    try{
        var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    }catch(e){
        
    }
    
});
//io.on(eventName,cbfn)
io.on('connection',(socket)=>{
    console.log('Client Connected ',socket.id);
    socket.on('disconnect',()=>{
        console.log('Client Disconnected ',socket.id);
    })
});

const { myRoute } = require('./routes/myRoute');
const { registerRoute, loginRoute } = require('./routes/authRoute');

//Lets create the first route



//If you want to recive json payload
app.use(express.json())

app.use(myRoute);
app.use('/api',registerRoute);
app.use('/api',loginRoute);
app.use(express.static('frontend'));



let port = process.env.PORT || 5000;
server.listen(port,()=>{
    console.log('The server is running on ',port)
})