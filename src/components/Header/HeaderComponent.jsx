import React from "react";
import "./HeaderComponent.css";


/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!

        */
// TODO - make sure HeaderComponent is expecting the right props (if any)!

export const HeaderComponent = ({ query, setQuery }) => {
  
  //function for onchange instead of writing e.target.value
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  //toresetsearch
  const resetQueryField = () => {
    setQuery("");
  };

  //add comment here tomo
  const callSearchFunction = (e) => {
    e.preventDefault();
    query.search(query);
    resetQueryField();
  };

  return (
    <header className={"header"}>
      <div>
        <input
          value={query}
          type="text"
          className="searchbar"
          placeholder="Enter character name..."
          autoComplete="off"
          onChange={handleSearchInputChange}
        />
      </div>
      Game of Thrones React App
    </header>
  );
};
