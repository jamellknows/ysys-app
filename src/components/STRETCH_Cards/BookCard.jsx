import React from 'react';
import './Card.css';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!


export const BookCard = ({book}) => {

    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            <Card.Text>{book.isbn}</Card.Text>
          </Card.Body>
          <CardGroup>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{book.authors}</ListGroup.Item>
              <ListGroup.Item>{book.numberOfPages}</ListGroup.Item>
              <ListGroup.Item>{book.mediaType}</ListGroup.Item>
              <ListGroup.Item>{book.released}</ListGroup.Item>
            </ListGroup>
          </CardGroup>
        </Card>
      );
};