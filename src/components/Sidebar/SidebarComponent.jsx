import React, { useState, useEffect } from "react";
import "./SidebarComponent.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function SidebarComponent({ query, setQuery }) {
  //  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [feed, setFeed] =useState([]);
  
  //doesnt work but does logically in my head 
  // const Get10H = (event) => {
  //  if(event.key==="10H"){
  //   useEffect(() => {
  //       fetch(`https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`)
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setFeed(data);
  //         });
  // }}, [feed])};

 // works but doesnt pass into feed
  // const get10H = (select) => {
  //   return fetch(
  //     `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`
  //   ).then((response) => {
  //     return response.json()
  //     .then(console.log(response))
  //   });
  // };

//get 10 characters
  const get10C = () => {
    return fetch(
      `https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10`
    ).then((response) => {
      return response.json().then(console.log(response));
    });
  };

  //get 25 characters
  const get25C = () => {
    fetch(
      `https://www.anapioficeandfire.com/api/characters?page=1&pageSize=25`
    ).then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  };
  

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="true"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand>Filter your search...</Navbar.Brand>
      <Nav className="flex-column">
        <NavDropdown title="Houses" onSelect={evt=>setFeed(evt.key)} id="collasible-nav-dropdown">
          <NavDropdown.Item as="button"  eventKey='10H'>10</NavDropdown.Item>
          <NavDropdown.Item eventKey="25H">25</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown title="Characters" id="nav-dropdown">
          <NavDropdown.Item
            onClick={() => {
              get10C().then((response) => setFeed(response));
            }}
          >
            10
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              get25C();
            }}
          >
            25
          </NavDropdown.Item>
          <NavDropdown.Item>50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown title="Books" className="bookNav" id="nav-dropdown">
          <NavDropdown.Item>10</NavDropdown.Item>
          <NavDropdown.Item>25</NavDropdown.Item>
          <NavDropdown.Item>50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      {/* <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      /> */}
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="collapse"
      ></Navbar.Collapse>
    </Navbar>
  );
}
