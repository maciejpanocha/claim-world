import React from 'react';
import './style.css';

const Support = () => (
    <div className="support">
        <div className="support__div">
            <h2 className="support__h2">Sakiewką potrząśnij!</h2>
            <p className="support__paragraph support__paragraph--2">Pomóż nam w opłaceniu maszyny i zgarnij dodatkowe uprawnienia:</p>
            <ul className="support__unorganizedList">
                <li className="support__listItem">Kolorki na serwerze gry, jak i na Discordzie.</li>
                <li className="support__listItem">Kilka dodatkowych funkcji, m.in. Drugi Dom!</li>
                <li className="support__listItem">Genialny system TARCZY PRZECIWKO FANTOMOM.</li>
            </ul>
            <a href="#" className="support__link" target="_blank" rel="norefferal noopener" title="Portfel serwera Claim World">KUPUJĘ!</a>
            <p className="support__paragraph--small">Ranga VIP zostanie przyznana PERMAMENTNIE!</p>
            <p className="support__paragraph--small">Zasil portfel serwera DOWOLNĄ kwotą, podając w tytule swój nick i napisz do administratora.</p>
        </div>
    </div>
);

export default Support;