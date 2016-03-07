import Baobab from "baobab";
import constants from "../constants";

export default new Baobab({
    constants,
    globalState: "openingMenu",
    globalMode: "",
    player: {
        name: ""
    },
    server: {
        running: false,
        address: "",
        port: ""
    }
});
