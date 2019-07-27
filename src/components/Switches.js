import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from './components/Games/Games';
import GameCreate from './GameTable/GameCreate';
import GameDeleteMap from './GameTable/GameDeleteMap';
import GameUpdate from './GameTable/GameUpdate'

function Switch() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/gamelist" component={Games} />
        <Route path="/newgame" component={GameCreate} />
        <Route path="/update/:id" component={GameUpdate} />
        <Route path="/delete/:id" component={GameDeleteMap} />
      </div>
    </Router>
  );
}

function Games() {
  return <h2>Game List</h2>;
}

function GameCreate() {
  return <h2>Create New Game</h2>;
}

function Update({ match }) {
  return <h3>Game ID to Update: {match.params.id}</h3>;
}

function GameUpdate({ match }) {
  return (
    <div>
      <h2>Update Game</h2>

      <ul>
        <li>
          <Link to={`${match.url}/update`}>Update Game</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Update} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Update Your Game Here</h3>}
      />
    </div>
  );
}

function Delete({ match }) {
    return <h3>Game ID to Delete: {match.params.id}</h3>;
  }
  
  function GameDeleteMap({ match }) {
    return (
      <div>
        <h2>Delete Game</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/delete`}>Delete Game</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:id`} component={Delete} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Delete Your Game Here</h3>}
        />
      </div>
    );
  }
  
function Header() {
  return (
    <ul>
      <li>
        <Link to="/gamelist">Game List</Link>
      </li>
      <li>
        <Link to="/newgame">Create New Game</Link>
      </li>
      <li>
        <Link to="/update/:id">Update a Game</Link>
      </li>
      <li>
        <Link to="/delete/:id">Delete a Game</Link>
      </li>
    </ul>
  );
}

export default Switch;