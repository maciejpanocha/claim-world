import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Support = () => (
    <div className="support" id="wsparcie">
        <div className="support__div">
            <h2 className="support__h2">Sakiewką potrząśnij!</h2>
            <p className="support__paragraph support__paragraph--2">Pomóż nam w opłaceniu maszyny i zgarnij dodatkowe uprawnienia!</p>
            <ul className="support__unorganizedList">
                <li className="support__listItem">Kolorki na serwerze gry, jak i na Discordzie.</li>
                <li className="support__listItem">Kilka dodatkowych funkcji, m.in. Drugi Dom!</li>
                <li className="support__listItem">Brak utraty doświadczenia po śmierci.</li>
                <li className="support__listItem">Genialny system TARCZY PRZECIWKO FANTOMOM.</li>
            </ul>
            <a href="http://craftserve.pl/s/755978/shop" className="support__link" target="_blank" rel="norefferal noopener" title="Portfel serwera Claim World">Kupuję!</a>
            <p className="support__paragraph--small">Zasil portfel serwera dowolną kwotą, podając dokładny nick z gry.</p>
            <p className="support__paragraph--small">Rangę VIP otrzymasz na zawsze.</p>
            <span className="support__span">
                <a href="https://facebook.com/claimworldgg" className="support__link--social" target="_blank" rel="norefferal noopener" title="Link do social media"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.youtube.com/channel/UC3-1sjBfM1BAdPMpveQto3A" className="support__link--social" target="_blank" rel="norefferal noopener" title="Link do social media"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://instagram.com/claimworldgg" className="support__link--social" target="_blank" rel="norefferal noopener" title="Link do social media"><FontAwesomeIcon icon={faInstagram} /></a>
            </span>
        </div>
    </div>
);

export default Support;