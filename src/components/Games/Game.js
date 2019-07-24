import React from 'react';

const Game = (props) => {
  return(
    <tr>
      <td>{props.game.name}</td>
      <td>{props.game.numPlayers}</td>
      <td>{props.game.description}</td>
      <td>{props.game.learnVideo}</td>
    </tr>
  )
}

export default Game;