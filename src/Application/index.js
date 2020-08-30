import React from 'react';
import './application.css';
import './container.css';
import sideImage from './../images/side-image.png';

const Application = () => (
    <div className="application">
        <img src={sideImage} className="application__image" alt="postać z gry" />
        <div className="container">
            <h2 className="container__h2">Aplikacja Na Serwer</h2>
            <p className="container__paragraph">Claim World to prywatny świat, na którym grać prawo mają tylko wybrane osoby. By dołączyć do tego zacnego grona, musisz pomyślnie przejść proces rekrutacji.</p>
            <ul className="container__unorganizedList">
                <li className="container__listItem">Kim jesteś?</li>
                <li className="container__listItem">Dlaczego chcesz dołączyć?</li>
                <li className="container__listItem">Jak wspomożesz promocję serwera?</li>
                <li className="container__listItem">Dlaczego akurat Ty?</li>
            </ul>
            <p className="container__paragraph--small">Odpowiedzi na powyższe pytania należy przesłać do <a href="https://discord.gg/5dUyeMu" className="container__link" target="_blank" rel="norefferal noopener" title="Zaproszenie na Discorda Claim World">Chikara#5060</a> na platformie Discord.</p>
        </div>
    </div>
);

export default Application;