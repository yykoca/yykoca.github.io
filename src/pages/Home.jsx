import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    
    return (
        <Container id="home" className="d-flex flex-column align-items-center justify-content-center py-5">
            <Row>
                <Col>
                    <Image className="downEffect" src="./images/yykoca.jpg" roundedCircle width="240" height="240" />
                </Col>
            </Row>
            <Row className='p-2 mt-5 text-center'>
                <Col xs className="upEffect">
                    <span className='fs-4'>{t('home.greeting')}</span>
                    <h1 className="mb-0 display-3">Yahya Yasir Koca.</h1>
                    <h2>{t('home.title')}</h2>
                    <p className='fs-5'>
                        {t('home.description')}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
