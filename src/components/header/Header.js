import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/post'>posts</NavLink >
                </li>
            </ul>
        </div>
    );
}

export default Header;