//import React from 'react';
//import Games from '../Games';
//import {Button} from 'reactstrap';

const GameDelete = (props) => {
  return (Games) => {
    fetch(`http://localhost:3000/games/${Games.id}`, {
        method: 'DELETE', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
          })
        })
        }
}
export default GameDelete;