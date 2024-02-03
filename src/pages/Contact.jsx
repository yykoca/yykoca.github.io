import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
    const submitContactForm = (e) => {
        e.preventDefault();
        console.log("Form sending.");
    }

    return (
        <Container id="contact" fluid className="d-flex justify-content-center p-0">
            <Form onSubmit={submitContactForm} className="d-flex flex-column  justify-content-center px-4 w-100" style={{maxWidth:"600px", minHeight:"75vh", background: "rgb(247,247,247)"}}>
                <h2 className="text-center my-3">Contact me</h2>
                
                <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Control type="text" placeholder="What's your name?" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="What's your email adress?" />
                    {/* <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicTextarea">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="dark" type="submit" className="">
                    Let me know
                </Button>
            </Form>
        </Container>
    )
}

export default Contact
