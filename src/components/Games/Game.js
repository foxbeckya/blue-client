import React, {useState} from 'react';
import GameUpdate from './GameTable/GameUpdate';
import GameDelete from './GameTable/GameDeleteMap';
import {Table, Button} from 'reactstrap';

const GameList = (props) => {

const [updateShow, setUpdateShow] = useState(false);
const [deleteShow, setDeleteShow] = useState(false);
const gameToUpdate=()=> {
  fetch(`http://localhost:3000/game/:id`)
}
  return(
  <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Number of Players</th>
      <th>Description</th>
      <th>Tutorial Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{props.game.id}</td>
      <td>{props.game.name}</td>
      <td>{props.game.numPlayers}</td>
      <td>{props.game.description}</td>
      <td>{props.game.learnVideo}</td>
      <td>

      <Button onClick={() => setUpdateShow(true)}>Update
      <GameUpdate 
        gameToUpdate={gameToUpdate}
        show={updateShow}
        onHide={() => setUpdateShow(false)} />
      </Button>
      </td>
    <td>
    <Button onClick={()=>setDeleteShow(true)}>Delete
      <GameDelete
        show={deleteShow}
        onHide={() =>setDeleteShow (false)} />
        </Button>

     {/* <Button onClick={() => <GameUpdate />}>Update</Button>
     <Button onClick={() => <GameDeleteMap />}>Delete</Button> */}
      </td>
    </tr>
    </tbody>
    </Table>

    )}


export default GameList;