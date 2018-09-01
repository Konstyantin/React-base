import React from "react";

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <div className="nav navbar-nav">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/user">User</a></li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;