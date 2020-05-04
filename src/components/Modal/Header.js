import React from 'react';

function Header(props) {

    const { title, toggle } = props;
    return (
        <header>
            <span>{title}</span>
            <button className="close" onClick={() => toggle(false)}>×</button>
        </header>
    );
}
export default Header;