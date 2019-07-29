import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const GameUpdate = (props) => {
  const [editName, setEditName] = useState(props.gameToUpdate.name);
  const [editDesc, setEditDesc] = useState(props.gameToUpdate.description);
  const [editNumPlayers, setEditNumPlayers] = useState(props.gameToUpdate.numPlayers);
  const [editLearnVideo, setEditLearnVideo] = useState(props.gameToUpdate.learnVideo);
 
  const Update = (event, gameToUpdate) => {
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
          <Button type="submit">Update this Game</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default GameUpdate;