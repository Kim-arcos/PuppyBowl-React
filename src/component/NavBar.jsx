import React from 'react';

const NavBar = () => {
    return (
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/playerList">PlayerList</a>
            </li>
            <li>
                <a href="/playerDetails">PlayerDetails</a>
            </li>
            <li>
                <a href="/playerForm">PlayerForm</a>
            </li>
        </ul>
    );
};

export default NavBar;
