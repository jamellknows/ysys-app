import React from "react";
import "./SidebarComponent.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function SidebarComponent({
  sidebarSelection,
  setSidebarSelection,
  pageSize,
  setPageSize,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="" onClick={() => setSidebarSelection("characters")}>
            Characters
          </Nav.Link>
          <Nav.Link className="books" href="" onClick={() => setSidebarSelection("books")}>
            Books
          </Nav.Link>
          <Nav.Link href="" onClick={() => setSidebarSelection("houses")}>
            Houses
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="" onClick={() => setPageSize(10)}>
              10
            </NavDropdown.Item>
            <NavDropdown.Item href="" onClick={() => setPageSize(25)}>
              25
            </NavDropdown.Item>
            <NavDropdown.Item href="" onClick={() => setPageSize(50)}>
              50
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
