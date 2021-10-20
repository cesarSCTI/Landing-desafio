import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from '../../../src/logo-guzmar-sport.png'

const NavBar = () =>{
    return(
        <Navbar  expand="lg" style={{padding: '10px',backgroundColor:'#ececec', boxShadow:'0px 0px 10px #cecece'}}>
            <Navbar.Brand href="#">
                <img src={logo} alt="logo" hight="60px" width="60px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="justify-content-md-center"
                navbarScroll
                >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#hombres">Hombres</Nav.Link>
                    <Nav.Link href="#mujeres">Mujeres</Nav.Link>
                    <Nav.Link href="#ninos">Niños</Nav.Link>
                    <Nav.Link href="#sport">Sport</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;