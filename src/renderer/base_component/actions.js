import Elekiter from "elekiter";

const elekiter = new Elekiter();

export const runGameServer = (tree) => {
    elekiter.request("run-server").then(() => {
        //TODO
    }).catch((e) => {});
};

export const startGame = (tree) => {
    tree.set("gameStarted", true);
};
