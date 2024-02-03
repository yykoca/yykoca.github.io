import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

function Header() {
    return (
        <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Image src="./images/logo.png" width="50" height="50" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
