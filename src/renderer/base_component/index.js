import React from "react";
import * as actions from "./actions";

export default class BaseComponent extends React.Component {
    constructor(reactTemplates, ...args) {
        super(...args);

        this.reactTemplates = reactTemplates;
    }

    static get actions() {
        return actions;
    }

    render() {
        return this.reactTemplates.bind(this)();
    }
}
