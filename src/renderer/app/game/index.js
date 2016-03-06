import BaseComponent from "base-component";
import Template from "./template.rt";

export default class GameComponent extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);
    }
}
