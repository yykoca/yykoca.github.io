import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    
    return (
        <Container id="contact" fluid className="d-flex flex-column justify-content-center text-center">
            <h2 className="text-center my-3">{t('contact.title')}</h2>
            <p>{t('contact.message')}</p>
            <a href="mailto:yykoca.08@gmail.com">
                <Button variant="dark">{t('contact.button')}</Button>
            </a>
        </Container>
    )
}

export default Contact
