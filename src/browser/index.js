import express from "express";
import http from "http";
import socketIO from "socket.io";
import myIp from "my-ip";
import constants from "../constants";

export const runServer = (cb) => {
    const app = express();
    const httpServer = http.Server(app);
    const socketServer = socketIO(httpServer);
    httpServer.listen(constants.server.port, () => {
        cb(myIp(), constants.server.port);
    });
    socketServer.on("connection", () => {
        console.log("@connection");
    });
};
