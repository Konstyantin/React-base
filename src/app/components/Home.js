import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age {this.props.age}</p>
                <p>Your name is {this.props.user.name}, your hobbies</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.protoTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};

export default Home;