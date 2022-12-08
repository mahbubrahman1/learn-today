import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavigationBar = () => {
    return (
        <div>
            <Link to='/'>
                <div className='d-flex flex-row justify-content-center custom-nav-color pt-2 d-inline'>
                    <img src={Logo} alt="" />
                </div>
            </Link>
            <Navbar bg="light" expand="lg" className='sticky-top pt-0'>
                <Container>
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
        </div>
    )
}

export default NavigationBar