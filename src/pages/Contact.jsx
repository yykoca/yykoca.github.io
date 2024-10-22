import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';

function Contact() {

    return (
        <Container id="contact" fluid className="d-flex flex-column justify-content-center text-center">
            <h2 className="text-center my-3">Let’s Stay in Touch</h2>
            <p>While I'm not actively seeking new opportunities at the moment, feel free to reach out anytime. Whether you have a question or simply want to connect, I'll do my best to respond!</p>
            <a href="mailto:yykoca.08@gmail.com">
                <Button variant="dark">Let me know</Button>
            </a>
        </Container>
    )
}

export default Contact
