import Elekiter from "elekiter";

const elekiter = new Elekiter();

export const runGameServer = (tree) => {
    return elekiter.request("run-server");
};

export const transitGlobalState = (tree, stateName) => {
    tree.set("globalState", stateName);
};
