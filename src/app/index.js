import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


import BaseExample from "./components/BasicExample"

class App extends React.Component {
    render() {
        return (
            <div>
                <BaseExample/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));

