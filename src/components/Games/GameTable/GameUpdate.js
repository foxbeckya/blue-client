import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const GameUpdate = (props) => {
  const [editName, setEditName] = useState(props.game.name);
  const [editDesc, setEditDesc] = useState(props.game.description);
  const [editNumPlayers, setEditNumPlayers] = useState(props.game.numPlayers);
  const [editLearnVideo, setEditLearnVideo] = useState(props.game.learnVideo);
 
  const Update = (event, game) => {
    event.preventDefault();
    fetch(`http://localhost:3000/game/update/${props.gameToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({log: {name: editName, description: editDesc, numPlayers: editNumPlayers, learnVideo: editLearnVideo}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => {
        props.fetchGames();
        props.updateOff();
    })
  }

  return(
    <Modal isOpen={true}>
      <ModalHeader>Edit a Game</ModalHeader>
      <ModalBody>
        <Form onSubmit={Update}>
          <FormGroup>
            <Label htmlFor="name">Edit Name:</Label>
            <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
          </FormGroup>
          <FormGroup>
          <Label htmlFor="description">Edit Description:</Label>
            <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
            </FormGroup>
          <FormGroup>
          <Label htmlFor="numPlayers">Edit Number of Players:</Label>
            <Input name="numPlayers" value={editNumPlayers} onChange={(e) => setEditNumPlayers(e.target.value)}/>
          </FormGroup>
          <FormGroup>
          <Label htmlFor="learnVideo">Edit Tutorial Link:</Label>
            <Input name="learnVideo" value={editLearnVideo} onChange={(e) => setEditLearnVideo(e.target.value)}/>
          </FormGroup>
          <Button type="submit">Update the game!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default GameUpdate;