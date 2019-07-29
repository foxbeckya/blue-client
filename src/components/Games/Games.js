import React, {useState, useEffect} from 'react';
import {Button, Card, CardImg, CardDeck, CardBody} from 'reactstrap';
//import GameCreate from './GameTable/GameCreate';
import GameUpdate from './GameTable/GameUpdate';
import GameDelete from './GameTable/GameDelete';
import Game from './Game';
import './Games.css'


const gameToUpdate=()=> {
  fetch(`http://localhost:3000/game/:id`)
}
const Games = (props) => {
  const [games, setGames] = useState([]);
  const [updateShow, setUpdateShow] = useState(false);

  useEffect(() => {
    console.log (props.token);
    fetch('http://localhost:3000/games/gamelist', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    })
 .then(res => res.json())
      .then(games => {
        console.log(games);
          setGames(games);
      })
      .catch(err => console.group(err))
    }, [props.token])

  //   const pieRows = () => {
  //     return pies.map((pieInfo, index) => 
  //       {
  //         return <Pie key={index} pie={pieInfo} />
  //       }
  //     )
  //   }
  
  //   return (
  //     <table>
  //       <tbody>
  //         {pieRows()}
  //       </tbody>
  //     </table>
  //   )
  // }

    const gameList = () => {
      console.log(games);
      return games.map((GameList, id) =>
      {
  
    return (
      // THIS IS SOMETHING TO ASK ABOUT
        <CardDeck>
          <Card>
            <CardImg top width="100%" src="" alt="Game Pic" />
            <CardBody>
            <Game key={id} game={GameList} />
              {/* <CardTitle>{props.game.name}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>{props.game.description}</CardText> */}
              <Button onClick={() => setUpdateShow(true)}>Update This Game
      <GameUpdate 
        gameToUpdate={gameToUpdate}
        show={updateShow}
        onHide={() => setUpdateShow(false)} /></Button>
            <Button onClick={()=> <GameDelete />}>Delete This Gmae        
        </Button>
            </CardBody>
            </Card></CardDeck>
            );
       }
      );
    }}

  export default Games;