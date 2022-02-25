import React from 'react';
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <h1>
                <span style={{color: 'blue'}} className={headerStyles.title}>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the lastest web</p>

        </>
    );
};

export default Header;
