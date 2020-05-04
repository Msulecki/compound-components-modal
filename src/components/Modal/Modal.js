import React, { Component } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import '../../styles/Modal.scss';

class Modal extends Component {

    static Content = Content;
    static Footer = Footer;
    static Header = Header;

    render() {
        const { toggle } = this.props;
        const children = React.Children.map(this.props.children, child => React.cloneElement(child));

        return (
            <div id="modal" className="modal" onClick={e => e.target.id === 'modal' && toggle(false)}>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        );
    }
}
export default Modal;