import BaseComponent from "base-component";
import Template from "./template.rt";

export default class App extends BaseComponent {
    constructor(...args) {
        super(Template, ...args);

        this.state = {
            name: "alice"
        };
    }
}
