import React from 'react';
//import GameUpdate from './GameTable/GameUpdate';
// import GameDelete from './GameTable/GameDelete';
//import {Table, Button} from 'reactstrap';

const GameList = (props) => {

  return(
    <tbody>
    <thead>
    <tr>
      <th>Game #</th>
      <th>Name</th>
      <th>Number of Players</th>
      <th>Description</th>
      <th>Tutorial Link</th>
    </tr>
  </thead>
    <tr>
      <td>{props.game.id}</td>
      <td>{props.game.name}</td>
      <td>{props.game.numPlayers}</td>
      <td>{props.game.description}</td>
      <td>{props.game.learnVideo}</td>
      </tr>
      </tbody>

    )}


export default GameList;