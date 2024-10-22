import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import projects from "../data/projects.json";

function Project() {
    return (
        // <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "rgb(167,237,219)" }} >
        <Container fluid id="project" className="py-5 md:p-5 text-center bg-dark">
            <h3 className="text-center my-5 text-light" >Projects</h3>
            <Row xs={1} md={2} lg={3} className="container mx-auto g-4 justify-content-center align-items-md-center d-flex flex-row flex-wrap" style={{ overflow: "scroll", scrollbarWidth: "none" }} >
                {projects.map((project, idx) => (
                    <Col key={idx}>
                        <a href={ project.url }>
                            <Card className="border-0 bg-transparent py-4 md:p-4">
                                <Card.Img
                                    variant="top"
                                    src={ project.image }
                                />
                                <Card.Body className="text-white mt-3" style={{ minHeight: '250px'}}>
                                    <Card.Title>{ project.name }</Card.Title>
                                    <Card.Text>
                                        { project.description }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Project;
