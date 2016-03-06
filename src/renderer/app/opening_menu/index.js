import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class OpeningComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);
    }

    onClickServer() {
        this.props.actions.runGameServer().then(() => {
            this.props.actions.transitGlobalState("serverMode");
        });
    }

    onClickClient() {
        this.props.actions.transitGlobalState("clientMode");
    }
}, {
    actions: BaseComponent.actions
});
