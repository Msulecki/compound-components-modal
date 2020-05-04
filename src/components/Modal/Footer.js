import React from 'react';

function Footer(props) {
    const { callToActionLabel, toggle } = props;

    const handleAlertClose = () => {
        alert('OK');
        toggle(false);
    }
    return (
        <footer>
            <button className="btn" onClick={handleAlertClose}>{callToActionLabel}</button>
            <button className="btn" onClick={() => toggle(false)}>Cancel</button>
        </footer>
    );
}
export default Footer;