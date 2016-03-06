import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";
import Opening from "./opening";
import Game from "./game";

export default branch(class App extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.Opening = Opening;
        this.Game = Game;
    }
}, {
    cursors: {
        gameStarted: ["gameStarted"]
    }
});
