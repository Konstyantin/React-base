import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initAge,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.protoTypes = {
    name: PropTypes.string,
    initAge: PropTypes.number
};

export default Home;