import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";
import OpeningMenu from "./opening_menu";
import ServerMenu from "./server_menu";
import ClientMenu from "./client_menu";
import Game from "./game";

export default branch(class App extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.OpeningMenu = OpeningMenu;
        this.ServerMenu = ServerMenu;
        this.ClientMenu = ClientMenu;
        this.Game = Game;
    }
}, {
    cursors: {
        globalState: ["globalState"]
    }
});
