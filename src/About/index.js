import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaceOfWorship, faMagic, faDumbbell } from '@fortawesome/free-solid-svg-icons'

const About = () => (
    <div className="about" id="o-nas">
        <h2 className="about__h2">O nas</h2>
        <p className="about__paragraph--slogan">Garść najważniejszych informacji o serwerze.</p>
        <div className="about__div">
            <h2 className="about__h3"><FontAwesomeIcon icon={faPlaceOfWorship} /></h2>
            <p className="about__paragraph">Stworzyliśmy niesamowite miejsce dla ludzi, szukających nowych doświadczeń i fajnie zbalansowanego gameplayu.</p>
        </div>
        <div className="about__div">
            <h2 className="about__h3"><FontAwesomeIcon icon={faMagic} /></h2>
            <p className="about__paragraph">Codziennie polepszamy jakość rozgrywki i konsekwentnie budujemy zgraną społeczność.</p>
        </div>
        <div className="about__div">
            <h2 className="about__h3"><FontAwesomeIcon icon={faDumbbell} /></h2>
            <p className="about__paragraph">Niełatwo tu zagrać. Jednak kiedy się już dostaniesz, nie będziesz chciał stąd odejść. Społeczność mamy świetną!</p>
        </div>
    </div>
);

export default About;