import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const GameCreate = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [numPlayers, setNumPlayers] = useState(undefined);
  const [learnVideo, setLearnVideo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/games/newgame', {
      method: 'POST', 
      body: JSON.stringify({log: {name: name, description: description, numPlayers: numPlayers, learnVideo: learnVideo}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((logGames) => {
        console.log(logGames);
        setName('');
        setDescription('');
        setNumPlayers('');
        setLearnVideo('')
        props.fetchGames();
    })
  }

  return(
    <Modal isOpen={true}>
      <ModalHeader>Add a Game</ModalHeader>
      <ModalBody>
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label htmlFor="name">Game Name:</Label>/>
          <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Game Description:</Label>/>
          <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="numPlayers">Number of Players:</Label>/>
          <Input type="integer" name="numPlayers" value={numPlayers} onChange={(e) => setNumPlayers(e.target.value)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="learnVideo">Link to Tutorial:</Label>/>
          <Input name="learnVideo" value={learnVideo} onChange={(e) => setLearnVideo(e.target.value)}/>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
      </ModalBody>
      </Modal>
  )
}

export default GameCreate;