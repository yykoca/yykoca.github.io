import React, { useState, useEffect } from "react";
import { Container, Card, Image, Row, Col, ProgressBar } from "react-bootstrap";

function About() {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [javaScript, setJavaScript] = useState(0);
    const [react, setReact] = useState(0);
    const [python, setPython] = useState(0);

    const skills = [
        // { name: "HTML", power: `${html}` },
        { name: "JAVASCRIPT", power: `${javaScript}`, variant:"danger" },
        { name: "REACT", power: `${react}`, variant:"warning" },
        { name: "VUE.JS", power: `${css}`, variant:"secondary" },
        { name: "SASS", power: `${css}`, variant:"info" },
        { name: "PYTHON", power: `${python}`, variant:"dark" },
        { name: "MONGODB", power: `${html}`, variant:"alert" },
        { name: "EXPRESSJS", power: `${css}`, variant:"success" },
    ]

    useEffect(() => {
        setTimeout(() => {
            setHtml(95);
            setCss(85);
            setJavaScript(80);
            setReact(90);
            setPython(65);
        }, 1000);
    }, []);

    return (
        <Container id="about" >
            <Row className="justify-content-center">
                <Col lg="6" className="p-4">
                    <Card className="shadow-none bg-transparent border-0">
                        <Card.Body>
                            <Card.Title className="text-center m-3">About me</Card.Title>
                            <Card.Text>
                                Hi, I'm Yahya Yasir! I'm a Full-Stack Developer who is passionate about writing code, solving problems, automating stuff, and building Single Page Application.<br />
                                🔭 I’m currently a Web Development student & tutor at DCI - Digital Career Institute.<br />
                                📚 I’m currently learning backend web development using NodeJS, ExpressJS and MongoDB.<br />
                                👯 I’m looking for a Full-Stack development internship.<br />
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
                            <Card.Title className="text-center m-3">My Skills</Card.Title>
                            {
                                skills.map(skill => {
                                    return (
                                        <div style={{ fontSize: "12px" }}>
                                            {skill.name}
                                            <ProgressBar
                                                striped
                                                // animated
                                                variant={skill.variant}
                                                now={skill.power}
                                                label={`${skill.power}%`}
                                                style={{ height: "12px", fontSize: "10px" }}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About
