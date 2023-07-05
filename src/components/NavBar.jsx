import React, {} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from "../pages/HomePage";
import Recipes from "../pages/Recipes";

function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Culinary Experience</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" element ={<HomePage/>}>Home</Nav.Link>
                <Nav.Link href="recipes" element={<Recipes/>}>Recipes</Nav.Link>
                <Nav.Link href="users">Users</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default NavBar;