import React from 'react'
import './SidebarComponent.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function SidebarComponent({ query, setQuery }) {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
         <NavDropdown title="Houses" id="nav-dropdown">
         <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Characters" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Books" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">10</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">25</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">50</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      </Nav>
    );
  }
  
 