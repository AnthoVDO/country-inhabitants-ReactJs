import React from 'react';
import {NavLink} from "react-router-dom" //allow use to navigate page by page

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active"> {/*activeClassName is used to know on which page we are */}
                Home
            </NavLink>
            <NavLink exact to="/About" activeClassName="nav-active">
                About
            </NavLink>
        </div>
    );
};

export default Navigation;