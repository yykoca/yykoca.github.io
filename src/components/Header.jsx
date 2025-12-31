import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
    const { t } = useTranslation();
    
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
        window.history.replaceState(null, null, window.location.pathname);
    };

    return (
        <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Nav.Link href="#" onClick={scrollToTop}>
                    <Image src="./images/logo.png" width="50" height="50" />
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about">{t('nav.about')}</Nav.Link>
                        <Nav.Link href="#experience">{t('nav.experience')}</Nav.Link>
                        <Nav.Link href="#projects">{t('nav.projects')}</Nav.Link>
                        <Nav.Link href="#contact">{t('nav.contact')}</Nav.Link>
                        <LanguageSwitcher />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
