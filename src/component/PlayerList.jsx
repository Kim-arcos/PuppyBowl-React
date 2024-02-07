import React from 'react';
import React, { useEffect, useState } from 'react';


function PlayerList(props) {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players')
        .then((response) => response.json ())
        .then((data) => setPlayers(data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>Player List</h2>
            {players.map((player) => (
                <div key={player.id}>
                    <h3>{player.name}</h3>
                    <p>Owner: {player.owner}</p>
                    <p>Team: {player.team}</p>
                    <p>Breed: {player.breed}</p>
                    <p>Position: {player.position}</p>
                    <button onClick={() => setSelectedPlayer(player)}>Details</button>
               {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
                </div>
           ))}
        </div>
    );
}

export default PlayerList;