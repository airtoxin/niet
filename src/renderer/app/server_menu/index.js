import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";
import PlayerNameInput from "./player_name_input";

export default branch(class ServerMenuComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.PlayerNameInput = PlayerNameInput;

        this.state = {
            players: ["alice", "bob"]
        };
    }

    onClickGameStart() {
        this.props.actions.transitGlobalState("game");
    }
}, {
    cursors: {
        serverRunning: ["server", "running"],
        serverAddress: ["server", "address"],
        playerName: ["player", "name"]
    },
    actions: BaseComponent.actions
});
