import React, { useState } from "react";
import "./HeaderComponent.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!

        */
// TODO - make sure HeaderComponent is expecting the right props (if any)!
const api = {
  characters: "https://www.anapioficeandfire.com/api/characters",
};

export const HeaderComponent = ({ query, setQuery }) => {
  
  // const renderCard = (query, index) => {
  //   return (
  //     <Card style={{ width: "18rem" }} key={index}>
  //       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  //       <Card.Body>
  //         <Card.Title>{query.name}</Card.Title>
  //         <Card.Text>{query.titles}</Card.Text>
  //       </Card.Body>
  //       <CardGroup>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item>{query.gender}</ListGroup.Item>
  //           <ListGroup.Item>{query.born}</ListGroup.Item>
  //           <ListGroup.Item>{query.IsAlive}</ListGroup.Item>
  //         </ListGroup>
  //       </CardGroup>
  //     </Card>
  //   );
  // };

  return (
    <header className={"header"}>
      <input
            type="text"
            className="searchbar"
            placeholder="Enter character name..."
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
      {/* {}
      <div className="search-bar">
        <div>
          <input
            type="text"
            className="searchbar"
            placeholder="Enter character name..."
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={fetchCharacter}
            value={query}
          />
        </div>
      </div> */}
      {/* <div className="nameSearch">
        {((query, index) => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{query.name}</Card.Title>
              <Card.Text>{query.titles}</Card.Text>
            </Card.Body>
            <CardGroup>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{query.gender}</ListGroup.Item>
              <ListGroup.Item>{query.born}</ListGroup.Item>
              <ListGroup.Item>{query.IsAlive}</ListGroup.Item>
            </ListGroup>
            </CardGroup>
          </Card>
          ))}
      </div> */}
      Game of Thrones React App
    </header>
  );
};
