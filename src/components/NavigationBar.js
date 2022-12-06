import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className='sticky-top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img width='100px' alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink}
                            style={({ isActive }) => {
                                return isActive ? { color: "#0EA5E9", fontWeight: "bold" } : {}
                            }}
                            to="/">HOME</Nav.Link>
                        <Nav.Link as={NavLink}
                            style={({ isActive }) => {
                                return isActive ? { color: "#0EA5E9", fontWeight: "bold" } : {}
                            }}
                            to="/courses">COURSES</Nav.Link>
                        <Nav.Link as={NavLink}
                            style={({ isActive }) => {
                                return isActive ? { color: "#0EA5E9", fontWeight: "bold" } : {}
                            }}
                            to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={NavLink}
                            style={({ isActive }) => {
                                return isActive ? { color: "#0EA5E9", fontWeight: "bold" } : {}
                            }}
                            to="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar