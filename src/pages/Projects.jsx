import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import projects from "../data/projects.json";

function Projects() {
    const { t } = useTranslation();
    
    return (
        <Container fluid id="projects" className="py-5 md:p-5 text-center bg-dark">
            <h3 className="text-center my-5 text-light" >{t('projects.title')}</h3>
            <Row xs={1} md={2} lg={3} className="container mx-auto g-4 justify-content-center align-items-md-center d-flex flex-row flex-wrap" style={{ overflow: "scroll", scrollbarWidth: "none" }} >
                {projects.map((project) => (
                    <Col key={project.id}>
                        <a href={ project.url }>
                            <Card className="border-0 bg-transparent py-4 md:p-4">
                                <Card.Img
                                    variant="top"
                                    src={ project.image }
                                />
                                <Card.Body className="text-white mt-3" style={{ minHeight: '250px'}}>
                                    <Card.Title className="mb-3">{ project.name }</Card.Title>
                                    <Card.Text style={{ fontWeight: "400" }}>
                                        { t(`projects.${project.id}.description`) }
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

export default Projects;
