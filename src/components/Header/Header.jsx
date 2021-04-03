import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/home">
                Home
      </NavLink>
            <NavLink activeClassName="active" to="/help">
                Help
      </NavLink>
            <NavLink activeClassName="active" to="/contact">
                Contact
      </NavLink>

        </nav>
    );
}
