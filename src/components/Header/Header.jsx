import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <h1 className="haeder__logo">Сайт для постов</h1>
                <a
                    className="header__link"
                    href="https://github.com/diasgalymbek47"
                    target="_blank"
                >
                    Создал: Galymbek Dias
                </a>
            </div>
        </header>
    );
};

export default Header;
