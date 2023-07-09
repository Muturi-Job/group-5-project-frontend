import React, {} from "react";
import { Link , NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from "../pages/HomePage";
import Recipes from "../pages/Recipes";
import Reviews from "../pages/Reviews";
import UserProfile from "../pages/UserProfile";

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
            <Navbar.Brand className="navbar-brand"><Link to='/home'  element ={<HomePage/>} >
            <img className="navbar-logo-image"  src="./images/savortastic-logo.png" alt="" />
              </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <NavLink to="home" className='nav-link' element={<HomePage/>}>Home</NavLink> */}
        <NavLink to="recipes" className='nav-link' element={<Recipes/>}>Recipes</NavLink>
        <NavLink to="users" className='nav-link'>Users</NavLink>
        <NavLink to="reviews" className='nav-link' element={<Reviews/>}>Reviews</NavLink>

        <NavLink to="profile" className='nav-link' element={<UserProfile/>}>
                {/* <button variant="outline"  className="logout-btn"> */}
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </NavLink>
                {/* </button> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default NavBar;