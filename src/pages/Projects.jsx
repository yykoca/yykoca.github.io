import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Project() {
    const projects = [
        {
            name: "Mürekkep",
            url: "https://yasarkoca.netlify.app",
            description: "Mürekkep yazarların kişisel yazılarını yayınladığı bir blog sayfasıdır. Yazarların okuyucusuyla buluşması, yeni yazılardan haberdar olması üzerine geliştirilmiş bir web uygulamasıdır.",
            image: "./images/projects/murekkep.png"
        },
        {
            name: "Not Kutusu",
            url: "http://notkutusu.com",
            description: "İTÜ'lü öğrenciler için geliştirilmiş olup, ders notlarını paylaşmaya ve diğer öğrenciler tarafından bu ders notlarına kolayca erişim sağlanması amacıyla hazırlanmış bir sitedir.",
            image: "./images/projects/notkutusu.png"
        },
        {
            name: "Game of Thrones",
            url: "https://yykoca.github.io/gameOfThrones/houses",
            description: "Bu proje, popüler televizyon dizisi Game of Thrones'dan alıntıları göstermek amacıyla Angular framework'ü kullanılarak geliştirilmiş bir web uygulamasıdır.",
            image: "./images/projects/game-of-thrones.png"
        }
        // {
        //     name: "Driver&Order Tracking",
        //     url: "./images/projects/delicious-things.png"
        // },
        // {
        //     name: "Delicious Things",
        //     url: "./images/projects/order-tracking.png"
        // },
        // {
        //     name: "Nostalji Sekerleme",
        //     url: "./images/projects/order-tracking.png"
        // },
        // {
        //     name: "Movie Hub",
        //     url: "./images/projects/delicious-things.png"
        // }
    ]
    return (
        // <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "rgb(167,237,219)" }} >
        <Container fluid id="project" className="my-5 py-5 md:p-5 text-center bg-dark">
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
