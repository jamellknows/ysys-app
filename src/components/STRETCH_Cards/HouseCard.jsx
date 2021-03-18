import React from 'react';
import './Card.css';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({house}) => {

    return (
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title><b>Title: </b>{house.name}</Card.Title>
          </Card.Body>
          <CardGroup>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><b>Region: </b>{house.region}</ListGroup.Item>
              <ListGroup.Item><b>Coat of Arms: </b>{house.coatOfArms}</ListGroup.Item>
              <ListGroup.Item><b>Slogan: </b>{house.words}</ListGroup.Item>
              <ListGroup.Item><b>Seats: </b>{house.seats}</ListGroup.Item>
            </ListGroup>
          </CardGroup>
        </Card>
      );
};
