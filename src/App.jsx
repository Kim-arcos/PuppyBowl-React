import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from '.component/PlayerList';
import PlayerDetails from '.component/PlayerDetails';

function App() {
  return (
   <Router>
    <Switch>
      <Route path="/playerList" component={PlayerList} />
      <Route path="/playerDetails" component={PlayerDetails} />
    </Switch>
  </Router>
  );
}
  

export default App;
