import React from "react";
import ReactDOM from "react-dom";
import {root} from "baobab-react/higher-order";
import tree from "./tree";
import App from "./app";

const RootedApp = root(App, tree);
ReactDOM.render(
    <RootedApp />,
    document.getElementById("app")
);
