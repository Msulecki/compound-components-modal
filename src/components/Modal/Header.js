import React from 'react';

function Header(props) {
    const title = props.title || 'Default modal title';
    const { toggle } = props;
    return (
        <header>
            <span>{title}</span>
            <button className="close" onClick={toggle}>×</button>
        </header>
    );
}
export default Header;