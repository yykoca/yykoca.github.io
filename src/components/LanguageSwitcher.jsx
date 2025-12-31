import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Globe } from 'react-bootstrap-icons';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const currentLang = i18n.language || 'tr';

    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" id="language-dropdown" className="border-0 text-decoration-none nav-link">
                <Globe className="me-2" />
                {currentLang.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
                <Dropdown.Item 
                    onClick={() => changeLanguage('en')} 
                    className="text-light bg-transparent"
                    style={{ 
                        fontWeight: currentLang === 'en' ? 'bold' : 'normal',
                        backgroundColor: currentLang === 'en' ? 'transparent' : ''
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                    English
                </Dropdown.Item>
                <Dropdown.Item 
                    onClick={() => changeLanguage('tr')} 
                    className="text-light bg-transparent"
                    style={{ 
                        fontWeight: currentLang === 'tr' ? 'bold' : 'normal',
                        backgroundColor: currentLang === 'tr' ? 'transparent' : ''
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                    Türkçe
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSwitcher;
