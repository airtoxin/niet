import Elekiter from "elekiter";

const elekiter = new Elekiter();

export const runGameServer = (tree) => {
    return new Promise((resolve, reject) => {
        elekiter.request("run-server").then(([address, port]) => {
            tree.set(["server", "running"], true);
            tree.set(["server", "address"], address);
            tree.set(["server", "port"], port);
            resolve();
        }).catch(reject);
    });
};

export const transitGlobalState = (tree, stateName) => {
    tree.set("globalState", stateName);
};

export const connectToServer = (tree, address) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    });
};

export const setPlayerName = (tree, name) => {
    tree.set(["player", "name"], name);
};
