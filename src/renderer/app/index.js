import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";
import OpeningMenu from "./opening_menu";
import Game from "./game";

export default branch(class App extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.OpeningMenu = OpeningMenu;
        this.Game = Game;
    }
}, {
    cursors: {
        globalState: ["globalState"]
    }
});
