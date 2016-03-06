import express from "express";
import constants from "../constants";

export const runServer = (cb) => {
    const app = express();
    app.listen(constants.server.port, () => {
        cb();
    });
};
