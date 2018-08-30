import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
    render () {

        let user = {
            name: "Kostia",
            hobbies: ["Sport", "Reading"]
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Roman"} age={26} user={user}>
                            <p>Lorem ipsum dolor sit.</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));