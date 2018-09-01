import React from "react";
import ReactDom from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";


import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends React.Component {

    render () {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} components={Root}>
                    <IndexRoute components={Home}/>
                    <Route path={"user/:id"} components={User}/>
                    <Route path={"home"} extract components={Home}/>
                </Route>
            </Router>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));