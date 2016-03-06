import express from "express";
import myIp from "my-ip";
import constants from "../constants";

export const runServer = (cb) => {
    const app = express();
    app.listen(constants.server.port, () => {
        cb(myIp(), constants.server.port);
    });
};
