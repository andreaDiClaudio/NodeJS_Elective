import express from "express";

const app = express();
app.use(express.json());

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}
));

io.on("connection", (socket) => {

    socket.on("a client choose a color", (data) => {
        io.emit("a new color just dropped", data);
    });

});


app.get("/users/me", (req, res) => {
    res.send({ data: req.session.username })
});

app.post("/register", (req, res) => {
    req.session.username = req.body.username;
    res.send({ data: req.body.username });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running in port", PORT));
