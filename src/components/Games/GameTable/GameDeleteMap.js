import React from 'react';
import {Table, Button} from 'reactstrap';

const GameDeleteMap = (props) => 
    fetch(`http://localhost:3000/game/${game.id}`, {
        method: 'DELETE', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.sessionToken
        })
    })
    .then(() => props.fetchGames())

  const GameMap = () => {
    return game.map((game, index) => {
      return(
        <tr key={game.id}>
          <th scope="row">{index +1}</th>
          <td>{game.name}</td>
          <td>{game.description}</td>
          <td>{game.numPlayers}</td>
          <td>{game.learnVideo}</td>
          <td>
            <Button color="warning" onClick={() => {props.editUpdateGames(game); props.updateOn()}}>Update</Button>
            <Button color="danger" onClick={() => {deleteGame(game)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

  return(
    <>
    <h3>Game List</h3>
    <hr/>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Number of Players</th>
          <th>Link to Tutorial</th>
        </tr>
      </thead>
        {GameMap()}
    </Table>
    </>
  )
 

export default GameDeleteMap;