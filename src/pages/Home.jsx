import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home({ scrollPosition }) {
    return (
        <Container id="home" className="d-flex flex-column align-items-center justify-content-center py-5">
            <Row>
                <Col>
                    <Image className={(scrollPosition === 0) && "downEffect"} src="./images/yykoca.jpg" roundedCircle width="240" height="240" />
                </Col>
            </Row>
            <Row className='p-2 mt-5 text-center'>
                <Col xs className={(scrollPosition === 0) ? "upEffect" : ""} >
                    <span className='fs-4'>Hi, my name is</span>
                    <h1 className="mb-0 display-3">Yahya Yasir Koca.</h1>
                    <h2>Software Developer</h2>
                    <p className='fs-5'>
                        I'm a Full-Stack Developer who is passionate about writing code,
                        solving problems, automating stuff, and building Single Page
                        Application.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
