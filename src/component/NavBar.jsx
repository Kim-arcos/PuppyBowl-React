import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/playerList">Pup List</Link>
            </li>
            <li>
                <Link to="/playerDetails">Pup Details</Link>
            </li>
            <li>
                <Link to="/playerForm">Add New Pup</Link>
            </li>
        </ul>
    );
};

export default NavBar;
