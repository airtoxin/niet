import React from "react";

export default class BaseComponent extends React.Component {
    constructor(reactTemplates, ...args) {
        super(...args);

        this.reactTemplates = reactTemplates;
    }

    render() {
        return this.reactTemplates.bind(this)();
    }
}
