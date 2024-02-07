import { useEffect, useState } from "react";
import PlayerDetails from "./PlayerDetails";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players"
                );
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = players.filter((player) =>
         player.name.toLowerCase().includes(searchQuery.toLowerCase())
         );
         setFilteredPlayers(filtered);
    }, [searchQuery, players]);
    
        const handleSearch = (event) => {
        const query =event.target.value;
        setSearchQuery(query);
    };

    return (
        <div>
            <h2>Player List</h2>
           <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Players"
            />
            {filteredPlayers.map((player) => (
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