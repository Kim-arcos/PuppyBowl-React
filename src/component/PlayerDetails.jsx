import React from 'react';
import PlayerList from './PlayerList';

function PlayerDetails(props) {
    const { player } = props;

    return (
        <div>
            <h2>Player Details</h2>
            <h3>{player.name}</h3>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
            <p>Breed: {player.breed}</p>
            <p>Position: {player.position}</p>
        </div>
    );
}

export default PlayerDetails;