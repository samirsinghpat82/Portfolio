import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const navbar = () => {
  return(

    <div>
    <Navbar
      fixed="top"
      variant="dark"
      expand="md"
      className="animate-navbar nav-theme justify-content-between"
    >
      
      <div className={styles.navigationItems}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
           
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  </div>  
  
  );
}

export default navbar;

