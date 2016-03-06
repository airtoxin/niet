import BaseComponent from "base-component";
import {branch} from "baobab-react/higher-order";
import Template from "./template.rt";

export default branch(class ServerMenuComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);
    }
}, {
    actions: BaseComponent.actions
});
