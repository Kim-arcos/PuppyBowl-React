import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './component/PlayerList';
import PlayerDetails from './component/PlayerDetails';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/playerList" component={PlayerList} />
      <Route path="/playerDetails" component={PlayerDetails} />
    </Routes>
  </Router>
  );
}

function Home() {
  return <h1>Welcome to the Puppy Bowl!</h1>;
}
  

export default App;
