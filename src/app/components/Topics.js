import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Topic from "./Topic";

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => <h3>Please select</h3>}/>
    </div>
);

export default Topics;