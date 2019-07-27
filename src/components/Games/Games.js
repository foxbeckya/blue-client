import React, {useState, useEffect} from 'react';
import Game from './Game';



const Games = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log (props.token);
    fetch('http://localhost:3000/games/gamelist', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    }).then(res => res.json())
      .then(json => {
        console.log(json);
          setGames(json);
      })
      .catch(err => console.group(err))
    }, [props.token]);

    const gameList = () => {
      console.log(games);
      return games.map((GameList, index) => 
        {
          return <Game key={index} game={GameList} />
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