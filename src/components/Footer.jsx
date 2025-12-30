import React from 'react'
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Github, Instagram, Linkedin, TwitterX, Envelope  } from "react-bootstrap-icons";

function Footer() {
    return (
        <Navbar id="footer" expand="lg" variant="dark" bg="dark" className="p-0 d-flex flex-column justify-content-end">
            <Container >
                <Nav className="d-flex flex-row mx-auto">
                    <Nav.Link className="px-3" href="https://github.com/yykoca"><Github /></Nav.Link>
                    <Nav.Link className="px-3" href="https://www.linkedin.com/in/yykoca"><Linkedin /></Nav.Link>
                    <Nav.Link className="px-3" href="http://x.com/yhysrkc"><TwitterX /></Nav.Link>
                    <Nav.Link className="px-3" href="https://instagram.com/yhysrkc"><Instagram /></Nav.Link>
                    <Nav.Link className="px-3" href="mailto:yykoca.08@gmail.com"><Envelope /></Nav.Link>
                </Nav>
            </Container>
            <div className="designed-by">Designed & Built with <Image src="./images/heart.svg" height="14"/> by Yahya Yasir Koca.</div>
        </Navbar>
    )
}

export default Footer
