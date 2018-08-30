import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreed() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Roman"}
                            initAge={26}
                            greet={this.onGreed}
                            changeLink={this.onChangeLinkName.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));