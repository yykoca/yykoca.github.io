import React from "react";
import { Button, Container, Card, Image, Row, Col } from "react-bootstrap";

function About() {
    const skills = ["Angular", "JavaScript", "PHP", "Symfony", "Responsive Design", "SCSS", "Git", "Docker", "NestJS", "MongoDB", "MySQL", "PostgreSQL", "Node.js", "Express.js", "GraphQL", "Material Design"]

    return (
        <Container id="about" className="d-flex flex-column justify-content-center">
            <Row className="d-flex align-items-center">
                <Col lg="6" className="p-4">
                    <Card className="shadow-none bg-transparent border-0">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center mb-3">About me</Card.Title>
                            <Card.Text>
                                🧑🏻‍💻 At the moment, I'm immersed as a Full-Stack Developer at CF. My greatest passion in my work lies in crafting code at every stage to enhance user experiences and innovate solutions.<br />
                                📚 I'm currently delving into backend web development using PHP, Symfony, and NestJS. Embracing new technologies and honing my skills are lifestyle choices for me.<br />
                                🛠 I’m continue to develop personal projects to improve my abilities.<br />
                                📫 Feel free to reach out to me on <a class="in" href="https://www.linkedin.com/in/yykoca/" target="_blank" rel="noreferrer">LinkedIn</a> or via <a href="mailto:yykoca.08@gmail.com">Email</a>. I'm always keen on collaborating on new projects and meeting new individuals!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6" className="p-4">
                    <Image
                        src="./images/vector-web-developer.png"
                        width="100%"
                    />
                </Col>
            </Row>
            <Row className="d-flex flex-wrap mt-4">
                <Col lg="8" className="p-4">
                    <Card className="border-0 bg-transparent">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center">My Skills</Card.Title>
                            <div className="d-flex flex-wrap gap-2 py-4">
                                {
                                    skills.map((skill, idx) => {
                                        return (
                                            <Button key={idx} variant="outline-dark">{skill}</Button>
                                        )
                                    })
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About
