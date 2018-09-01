import React from "react";
import {Link} from "react-router";

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <div className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/user/10"}>User</Link></li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;