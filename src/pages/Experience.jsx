import React from 'react'
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Experience() {
    const { t } = useTranslation();
    
    const experiences = t('experience.list', { returnObjects: true });
    return (
        <Container id="experience" className="d-flex flex-column">
            <Card className="border-0 bg-transparent p-4">
                <Card.Body>
                    <Card.Title as="h3" className="text-center">{t('experience.title')}</Card.Title>
                </Card.Body>
            </Card>
            {
                experiences.map((experience, idx) => (
                    <div key={idx} className="experience width-50">
                        <h4>{experience.company}</h4>
                        <h6>{experience.jobTitle}</h6>
                        <span>{experience.startDate} - {experience.endDate}</span>
                        <ul>
                            {experience.responsibilities.map((responsibility, rIdx) => (
                                <li key={rIdx}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </Container>
    )
}

export default Experience
