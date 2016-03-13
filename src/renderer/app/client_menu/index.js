import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class ClientMenuComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.status = {
            disconnect: Symbol("disconnect"),
            connecting: Symbol("connecting"),
            connected: Symbol("connected"),
            failed: Symbol("failed")
        };
        this.state = {
            serverAddress: "",
            connectionStatus: this.status.disconnect
        };
    }

    onChangeServerAddress(event) {
        this.setState({serverAddress: event.target.value});
    }

    onClickConnect() {
        this.setState({connectionStatus: this.status.connecting});

        this.props.actions.connectToServer(this.state.serverAddress).then(() => {
            this.setState({connectionStatus: this.status.connected});
            this.props.actions.transitGlobalState("game");
        }).catch(() => {
            this.setState({connectionStatus: this.status.failed});
        });
    }

}, {
    actions: BaseComponent.actions
});
