import React from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <div className="footer">
        <a href="#header" className="footer__link--button"><FontAwesomeIcon icon={faArrowCircleUp} /> Wróć na górę strony.</a>
        <p className="footer__paragraph">
            Projekt i wykonanie: Maciej Panocha, <a href="https://maciejpanocha.pl" className="footer__link" target="_blank" rel="norefferal noopener" title="Strona internetowa autora">www.maciejpanocha.pl</a>
        </p>
    </div>
);

export default Footer;