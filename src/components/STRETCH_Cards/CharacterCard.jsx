import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!

export const CharacterCard = ({ character }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title><b>Name: </b>{character.name}</Card.Title>
        <Card.Text><b>Aliases: </b>{character.aliases}</Card.Text>
      </Card.Body>
      <CardGroup>
        
        <ListGroup className="list-group-flush" variant="flush">
          <ListGroup.Item><b>Gender: </b>{character.gender}</ListGroup.Item>
          <ListGroup.Item><b>Date of Birth: </b>{character.born}</ListGroup.Item>
          <ListGroup.Item><b>Culture: </b>{character.culture}</ListGroup.Item>
        </ListGroup>
      </CardGroup>
    </Card>
  );
};
