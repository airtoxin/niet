import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class ClientMenuComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.state = {
            serverAddress: "",
            serverConnected: false
        };
    }

    onChangeServerAddress(event) {
        this.setState({serverAddress: event.target.value});
    }

    onClickConnect() {
        this.props.actions.connectToServer(this.state.serverAddress).then(() => {
            this.setState({serverConnected: true});
        });
    }

}, {
    actions: BaseComponent.actions
});
