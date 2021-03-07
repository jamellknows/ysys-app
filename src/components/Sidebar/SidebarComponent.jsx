import React from "react";
import "./SidebarComponent.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function SidebarComponent({ query, setQuery }) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

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
        <NavDropdown title="Houses" id="collasible-nav-dropdown">
          <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown title="Characters" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown title="Books" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="collapse"
      ></Navbar.Collapse>
    </Navbar>
  );
}
