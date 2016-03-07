import Baobab from "baobab";

export default new Baobab({
    globalState: "openingMenu",
    player: {
        name: ""
    },
    server: {
        running: false,
        address: "",
        port: ""
    }
});
