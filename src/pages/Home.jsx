import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    return (
        <Container id="home" className="d-flex flex-column align-items-center justify-content-center py-5">
            <Row>
                <Col>
                    <Image className="downEffect" src="./images/yykoca.jpg" roundedCircle width="240" height="240" />
                </Col>
            </Row>
            <Row className='p-2 mt-5 text-center'>
                <Col xs className="upEffect">
                    <span className='fs-4'>Hello there! My name is</span>
                    <h1 className="mb-0 display-3">Yahya Yasir Koca.</h1>
                    <h2>Software Developer</h2>
                    <p className='fs-5'>
                        I'm a passionate Full-Stack Developer with a love for crafting elegant code, solving intricate problems, automating tasks, and building engaging Single Page Applications.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
