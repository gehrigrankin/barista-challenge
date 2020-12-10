import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

import './NavbarContainer.scss';

const NavbarContainer = () => {
    return (
        <Navbar className="Navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <FontAwesomeIcon icon={faMugHot} className="mr-1 mb-1" />
                    Barista Wars
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">REGISTER</Nav.Link>
                        <Nav.Link href="#">SUPPORT</Nav.Link>
                        <Nav.Link href="#">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarContainer
