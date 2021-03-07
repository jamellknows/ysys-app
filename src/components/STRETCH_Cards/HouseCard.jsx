import React from 'react';
import './Card.css';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({house}) => {

    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{house.name}</Card.Title>
          </Card.Body>
          <CardGroup>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{house.region}</ListGroup.Item>
              <ListGroup.Item>{house.coatOfArms}</ListGroup.Item>
              <ListGroup.Item>{house.words}</ListGroup.Item>
              <ListGroup.Item>{house.seats}</ListGroup.Item>
              <ListGroup.Item>{house.currentLord}</ListGroup.Item>
              <ListGroup.Item>{house.heir}</ListGroup.Item>
            </ListGroup>
          </CardGroup>
        </Card>
      );
};
