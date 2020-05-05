import React from 'react';

function Footer(props) {
    const { toggle } = props;
    const callToActionLabel = props.callToActionLabel || "Default alert";

    const handleAlertClose = () => {
        alert('OK');
        toggle();
    }
    return (
        <footer>
            <button className="btn" onClick={handleAlertClose}>{callToActionLabel}</button>
            <button className="btn" onClick={toggle}>Cancel</button>
        </footer>
    );
}
export default Footer;