import React from "react";
import "./HeaderComponent.css";
import "../Images/jon.png";

export const HeaderComponent = ({ query, setQuery }) => {
  // //function for onchange instead of writing e.target.value
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  //returns searcbar and button
  return (
    <header className={"header"}>
      <div>
        <input
          value={query}
          type="text"
          className="searchbar"
          placeholder="Enter character name"
          autoComplete="off"
          onChange={handleSearchInputChange}
        />
      </div>
      Game of Thrones React App
    </header>
  );
};
