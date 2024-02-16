import React from "react";
import { Button, Container, Card, Image, Row, Col } from "react-bootstrap";

function About() {
    const skills = ["Angular", "JavaScript", "PHP", "Symfony", "Responsive Design", "SCSS", "Git", "Docker", "NestJS", "MongoDB", "MySQL", "PostgreSQL", "Node.js", "Express.js", "GraphQL", "Material Design"]

    return (
        <Container id="about" >
            <Row className="justify-content-center">
                <Col lg="6" className="p-4">
                    <Card className="shadow-none bg-transparent border-0">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center mb-3">About me</Card.Title>
                            <Card.Text>
                                Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is passionate about writing code, solving problems, automating stuff, and building Single Page Application.<br />
                                🔭 I’m seeking a new role as a Full-Stack Web Developer<br />
                                📚 I’m currently improving my skills and knowledge using Angular, PHP with Symfony, and NestJS.<br />
                                👯 I’m continue to develop personal projects to improve my abilities.<br />
                                📫 How to reach me: <a href="https://www.linkedin.com/in/yykoca/" target="_blank" rel="noreferrer">Linkedin</a> <a href="mailto:yykoca.08@gmail.com">Gmail</a>

                            </Card.Text>
                            {/* <Button variant="outline-dark mt-2">Download My Cv</Button> */}
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
            <Row className="d-flex flex-wrap justify-content-start">
                <Col lg="8" className="p-4">
                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center">My Skills</Card.Title>
                            <div className="skills-container">
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
