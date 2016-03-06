import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class OpeningMenuComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);
    }

    onClickServer() {
        this.props.actions.runGameServer().then(() => {
            this.props.actions.transitGlobalState("serverMenu");
        });
    }

    onClickClient() {
        this.props.actions.transitGlobalState("clientMenu");
    }
}, {
    actions: BaseComponent.actions
});