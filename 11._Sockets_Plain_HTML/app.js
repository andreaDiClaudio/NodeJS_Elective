import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http"; //When did we see this before: how to create a server without express
const server = http.createServer(app);

import { Server } from "socket.io"; //Capital 'S' means that it is a class
const io = new Server(server);//not an http server, a socket server that knows a server

//listening to connection. each time this callback is calles there is a new client connecting
io.on("connection", (socket) => {
    console.log("A client connected", socket.id);


    socket.on("color", (data) => {
        console.log("from the color picker:", data.data);

        //broadcast to all
        io.emit("a color was chosen", data);
        //usefull in games becasue you update yourself immidiatly and then send the update to the others later
        //sends to everyone but the one who sent the req
        //socket.broadcast.emit("a color was chosen", data);

        //sends to the specific client
        //socket.emit("a color was chosen", data);
    });

});

const PORT = process.env.PORT || 8080
server.listen(PORT, () => { console.log("server running on port:", PORT) }) //app.listen does not work
