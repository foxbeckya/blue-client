import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Game from './Game';


const Games = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/games/gamelist', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    }).then( (res) => res.json())
      .then(json => {
          setGames(json);
      })
      .catch(err => console.group(err))
    }, [])


    const gameList = () => {
      return games.map((GameList, index) => 
        {
          return <Game key={index} games={GameList} />
        }
      )
    }
  
    return (
      <table>
        <tbody>
          {gameList()}
        </tbody>
      </table>
    )
  }

  export default Games;