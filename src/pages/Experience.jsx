import React from 'react'
import { Container, Card } from "react-bootstrap";
import experiences from "../data/experiences.json";

function Experience() {
    return (
        <Container id="experience" className="d-flex flex-column my-5">
            <Card className="border-0 bg-transparent p-4">
                <Card.Body>
                    <Card.Title as="h3" className="text-center">Experience</Card.Title>
                </Card.Body>
            </Card>
            {
                experiences.map((experience, idx) => {
                    return (
                        <div class="experience width-50">
                            <h4>{ experience.jobTitle }</h4>
                            <h6>{ experience.company } · { experience.employmentType }</h6>
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
