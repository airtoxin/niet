import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class OpeningComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);
    }

    onClickClient() {
        this.props.actions.startGame();
    }
}, {
    actions: BaseComponent.actions
});