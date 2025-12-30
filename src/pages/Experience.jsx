import React from 'react'
import { Container, Card } from "react-bootstrap";
import experiences from "../data/experiences.json";

function Experience() {
    return (
        <Container id="experience" className="d-flex flex-column">
            <Card className="border-0 bg-transparent p-4">
                <Card.Body>
                    <Card.Title as="h3" className="text-center">My career journey so far</Card.Title>
                </Card.Body>
            </Card>
            {
                experiences.map((experience, idx) => {
                    return (
                        <div key={idx} className="experience width-50">
                            <h4>{ experience.company }</h4>
                            <h6>{ experience.jobTitle }</h6>
                            <span>{ experience.startDate } - { experience.endDate }</span>
                            <ul>
                                {
                                    experience.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                })
            }
       </Container>
    )
}

export default Experience
