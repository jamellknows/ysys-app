import React, { useState } from "react";
import "./HeaderComponent.css";

/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!

        */
// TODO - make sure HeaderComponent is expecting the right props (if any)!
const api = {
  characters: "https://www.anapioficeandfire.com/api/characters",
};
export const HeaderComponent = () => {
  const [query, setQuery] = useState("");

  const fetchData = async (event) => {
    if (event.key === "Enter") {
      fetch(`${api.characters}?name=${query}`)
        .then((resp) => resp.json())
        .catch((error) => {
          console.error("you spelt the name wrong! try again :)");
          throw error;
        })
        .then((data) => {
          setQuery("");
          console.log(data);
        });
    }
  };

  return (
    <header className={"header"}>
      {}
      <div className="search-bar">
        <div>
          <input
            type="text"
            className="searchbar"
            placeholder="Enter character name..."
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={fetchData}
            value={query}
          />
        </div>
      </div>
      Game of Thrones React App
    </header>
  );
};
