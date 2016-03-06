import Elekiter from "elekiter";

const elekiter = new Elekiter();

export const runGameServer = (tree) => {
    return new Promise((resolve, reject) => {
        elekiter.request("run-server").then(([address, port]) => {
            tree.set(["server", "address"], address);
            tree.set(["server", "port"], port);
            resolve();
        }).catch(reject);
    });
};

export const transitGlobalState = (tree, stateName) => {
    tree.set("globalState", stateName);
};
