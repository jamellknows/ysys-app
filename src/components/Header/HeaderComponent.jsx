import React, { useState } from "react";
import "./HeaderComponent.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!

        */
// TODO - make sure HeaderComponent is expecting the right props (if any)!
// const api = {
//   characters: "https://www.anapioficeandfire.com/api/characters",
// };

export const HeaderComponent = ({ query, setQuery }) => {
  
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
      Game of Thrones React App
    </header>
  );
};
