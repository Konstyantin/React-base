import React from "react";
import ReactDom from "react-dom";
import Root from "./components/Root";
import Home from "./components/Home";

class App extends React.Component {

    render () {
        return (
            <Root>

            </Root>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));