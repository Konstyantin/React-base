import React from "react";
import { browserHistory } from "react-router";

class User extends React.Component {

    onNavigateHome() {
        browserHistory.push("/home")
    }

    render() {
        return(
            <div>
                <h3>User page</h3>
                <p>User id: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go home</button>
            </div>
        );
    }
}

export default User;