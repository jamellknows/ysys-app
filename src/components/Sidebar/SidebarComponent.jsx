import React, { useState, useEffect } from "react";
import "./SidebarComponent.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export function SidebarComponent({ sidebarSelection, setSidebarSelection, pageSize, setPageSize }) {
  //  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  //  doesnt work but does logically in my head
  // const Get10H = (event) => {
  //  if(event.key==="10H"){
  //   useEffect(() => {
  //       fetch(`https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`)
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setFeed(data);
  //   }});
  // }, [feed])};

  // works but doesnt pass into feed
  // const get10H = (select) => {
  //   return fetch(
  //     `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`
  //   ).then((response) => {
  //     return response.json()
  //     .then(console.log(response))
  //   });
  // };


  // get 10 characters
  const get10C = (sidebarSelection) => {
    return fetch(
      `https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10`
    ).then((response) => {
      return response.json();
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
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="" onClick={() => setSidebarSelection("characters")} >Characters</Nav.Link>
      <Nav.Link href="" onClick={() => setSidebarSelection("books")} >Books</Nav.Link>
      <Nav.Link href="" onClick={() => setSidebarSelection("houses")} >Houses</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="" onClick={() => setPageSize(10)} >10</NavDropdown.Item>
        <NavDropdown.Item href="" onClick={() => setPageSize(25)} >25</NavDropdown.Item>
        <NavDropdown.Item href="" onClick={() => setPageSize(50)} >50</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    // <Navbar
    //   className="navbar"
    //   collapseOnSelect
    //   expand="true"
    //   bg="dark"
    //   variant="dark"
    // >
    //   <Navbar.Brand>Filter your search...</Navbar.Brand>
    //   <Nav className="flex-column">
    //     <Nav.Item>

    //     </Nav.Item>
    //   </Nav>
    //   <Nav>
    //     <NavDropdown title="Characters" id="nav-dropdown">
    //       <NavDropdown.Item value={feed} onChange={handleSearchInputChange} onClick={() => {get10C();}} >  10 </NavDropdown.Item>
    //       <NavDropdown.Item onClick={() => {get25C();}} > 25 </NavDropdown.Item>
    //       <NavDropdown.Item>50</NavDropdown.Item>
    //       <NavDropdown.Divider />
    //     </NavDropdown>
    //   </Nav>
    //   <Nav>
    //     <NavDropdown title="Books" className="bookNav" id="nav-dropdown">
    //       <NavDropdown.Item>10</NavDropdown.Item>
    //       <NavDropdown.Item>25</NavDropdown.Item>
    //       <NavDropdown.Item>50</NavDropdown.Item>
    //       <NavDropdown.Divider />
    //     </NavDropdown>
    //   </Nav>
    //   {/* <Navbar.Toggle
    //     aria-controls="responsive-navbar-nav"
    //     className="navbar-toggler"
    //   /> */}
    //   <Navbar.Collapse
    //     id="responsive-navbar-nav"
    //     className="collapse"
    //   ></Navbar.Collapse>
    // </Navbar>
  );
}




