import React from 'react';
import './header.css';
import './nav.css';
import './banner.css';
import logo from './../images/logo.png';

const Header = () => (
    <div className="header">
        <ul className="nav">
            <li className="nav__listItem nav__listItem--logo">
                <a href="index.html">
                    <img src={logo} className="nav__logo" alt="logo claim world" />
                </a>
            </li>
            <li className="nav__listItem">
                <a href="#o-nas" className="nav__link">O nas</a>
            </li>
            <li className="nav__listItem">
                <a href="#podanie" className="nav__link">Podanie</a>
            </li>
            <li className="nav__listItem">
                <a href="https://maciejpanocha.github.io/CW-Wiki/" className="nav__link" target="_blank" rel="norefferal noopener" title="Wiki serwera Claim World">Wiki</a>
            </li>
            <li className="nav__listItem">
                <a href="#wsparcie" className="nav__link">Wsparcie</a>
            </li>
        </ul>
        <div className="banner">
            <h1 className="banner__h1">Firmy już dostępne!</h1>
            <p className="banner__paragraph">Wejdź do gry i uzyskaj dostęp do ogromu możliwości, jakie daje własna firma!</p>
            <a href="https://discord.gg/5dUyeMu" className="banner__link" target="_blank" rel="norefferal noopener" title="Discord Claim Worlda">Dołącz teraz</a>
        </div>
    </div>
);

export default Header;