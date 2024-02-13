import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './component/PlayerList';
import PlayerDetails from './component/PlayerDetails';
import PlayerForm from './component/PlayerForm';
import NavBar from './component/NavBar';
import './styles.css';

function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playerList" element={<PlayerList />} />
      <Route path="/playerDetails" element={<PlayerDetails /> } />
      <Route path="/playerForm" element={<PlayerForm />} />
    </Routes>
  </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Puppy Bowl!</h1>
    </div>
  );
}
  

export default App;