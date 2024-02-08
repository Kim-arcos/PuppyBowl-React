import React, { useState } from 'react';

const PlayerForm = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [position, setPosition] = useState('');


const handleSubmit =(event) => {
    event.preventDefault();
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlfor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)} />

        <label htmlFor="breed">Breed:</label>
        <input type="text" name="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />

        <label htmlFor="position">Position:</label>
        <input type="text" name="position" value={position} onChange={(e) => setPosition(e.target.value)} />

<button type="submit">Submit</button>
    </form>
);
};

export default PlayerForm;