import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Roman"} initAge={26} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));