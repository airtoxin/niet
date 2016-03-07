import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class PlayerNameInputComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.state = {
            input: ""
        };
    }

    onChange(event) {
        this.setState({input: event.target.value});
    }

    onClickRunServer() {
        this.props.actions.setPlayerName(this.state.input);
        this.props.actions.runGameServer();
    }
}, {
    actions: BaseComponent.actions
});
