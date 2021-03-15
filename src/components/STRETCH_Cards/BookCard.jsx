import React from 'react';
import './Card.css';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!


export const BookCard = ({book}) => {

    return (
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title><b>Book Title: </b>{book.name}</Card.Title>
            <Card.Text><b>ISBN: </b>{book.isbn}</Card.Text>
          </Card.Body>
          <CardGroup>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><b>Author: </b>{book.authors}</ListGroup.Item>
              <ListGroup.Item><b>Number of Pages: </b>{book.numberOfPages}</ListGroup.Item>
              <ListGroup.Item><b>Media Type: </b>{book.mediaType}</ListGroup.Item>
              <ListGroup.Item><b>Release Date: </b>{book.released}</ListGroup.Item>
            </ListGroup>
          </CardGroup>
        </Card>
      );
};