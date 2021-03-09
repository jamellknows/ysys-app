import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

//its like character card but its just for when you search a name (might delete
// this if i figure out a way to append it to the character card instead tho, just placing it here for now )
export const SearchCard = ({ search}) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{search.name}</Card.Title>
          <Card.Text>{search.titles}</Card.Text>
        </Card.Body>
        <CardGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{search.gender}</ListGroup.Item>
            <ListGroup.Item>{search.born}</ListGroup.Item>
          </ListGroup>
        </CardGroup>
      </Card>
    );
  };
  