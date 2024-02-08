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
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/playerList" component={PlayerList} />
      <Route path="/playerDetails" component={PlayerDetails} />
      <Route path="/playerForm" component={PlayerForm} />
    </Routes>
  </Router>
  );
}

function Home() {
  return <h1>Welcome to the Puppy Bowl!</h1>;
}
  

export default App;
