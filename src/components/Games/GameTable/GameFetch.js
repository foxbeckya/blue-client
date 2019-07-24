import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';


const GameFetch = (props) => {
  const [games, setGames] = useState([]);
 // const [updateActive, setUpdateActive] = useState(false);
 // const [gamesToUpdate, setGamesToUpdate] = useState({});

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
      return game.map((GameList, index) => 
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

  // const editUpdateGames = (games) => {
  //   setGamesToUpdate(games);
  //   console.log(games);
  // }

  // const updateOn = () => {
  //   setUpdateActive(true);
  // }

  // const updateOff = () => {
  //   setUpdateActive(false);
  // }

  // useEffect(() => {
  //   fetchGames();
  // })

  return(
//     <Container>
//       <Row>
//         <Col md="3">
//           <GameCreate fetchGames={fetchGames} token={props.token}/>
//         </Col>
//         <Col md="9">
//           <GameTable games={games} editUpdateGames={editUpdateGames}
//             updateOn={updateOn} fetchGames={fetchGames} token={props.token}/>
//         </Col>
//         {updateActive ? <GamesEdit gamesToUpdate={gamesToUpdate} 
//         updateOff={updateOff} token={props.sessionToken} fetchGames={fetchGames}/> : <></>}
//       </Row>
//     </Container>
//   )
// }

export default GameFetch;