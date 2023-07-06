import React, {} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from "../pages/HomePage";
import Recipes from "../pages/Recipes";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className="navbar-brand"><Link to='/home'  element ={<HomePage/>} >Culinary Experience</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="home" className='nav-link' element ={<HomePage/>}>Home</Link>
                <Link to="recipes" className='nav-link' element={<Recipes/>}>Recipes</Link>
                <Link to="users" className='nav-link'>Users</Link>
                <button variant="outline" onClick={handleLogoutClick} className="logout-btn">Logout</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default NavBar;