import React from "react";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import skills from "../data/skills.json";

function About() {
    const { t } = useTranslation();

    return (
        <Container id="about" className="d-flex flex-column justify-content-center">
            <Row className="d-flex align-items-center">
                <Col lg="6" className="p-4">
                    <Card className="shadow-none bg-transparent border-0">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center mb-3">{t('about.title')}</Card.Title>
                            <Card.Text>
                                🧑🏻‍💻 {t('about.intro')}<br />
                                📚 {t('about.learning')}<br />
                                🛠 {t('about.projects')}<br />
                                📫 {t('about.contact')} <a className="in" href="https://www.linkedin.com/in/yykoca/" target="_blank" rel="noreferrer">{t('about.linkedin')}</a> {t('about.or')} <a href="mailto:yykoca.08@gmail.com">{t('about.email')}</a> {t('about.collaborate')}
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
                <Col lg="12" className="p-4">
                    <Card className="border-0 bg-transparent">
                        <Card.Body>
                            <Card.Title as="h3" className="text-center">{t('about.skills')}&nbsp;&amp;&nbsp;{t('about.experience')}</Card.Title>
                            <div className="d-flex flex-wrap gap-3 py-4 m-auto justify-content-center width-75">
                                {
                                    skills.map((skill, idx) => {
                                        return (
                                            <div key={idx} className="d-flex flex-column align-items-center justify-content-center" style={{minWidth: "120px"}}>
                                                <Image src={skill.image} height="40" className="mb-2"/>
                                                <span>{skill.name}</span>
                                            </div>
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
