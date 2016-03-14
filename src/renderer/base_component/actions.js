import Elekiter from "elekiter";
import socketIoClient from "socket.io-client";

const elekiter = new Elekiter();

export const setGlobalMode = (tree, mode) => {
    tree.set("globalMode", mode);
};

export const runGameServer = (tree) => {
    return new Promise((resolve, reject) => {
        elekiter.request("run-server").then(([address, port]) => {
            tree.set(["server", "running"], true);
            tree.set(["server", "address"], address);
            resolve();
        }).catch(reject);
    });
};

export const transitGlobalState = (tree, stateName) => {
    tree.set("globalState", stateName);
};

export const connectToServer = (tree, address) => {
    const port = tree.get(["constants", "server", "port"]);
    return new Promise((resolve, reject) => {
        const client = socketIoClient(`http://${address}:${port}`);
        client.on("connect", resolve);
        client.on("connect_error", reject);
    });
};

export const setPlayerName = (tree, name) => {
    tree.set(["player", "name"], name);
};
