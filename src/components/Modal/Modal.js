import React, { Component } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import '../../styles/Modal.scss';

class Modal extends Component {

    state = {
        isOpened: false,
    }

    static Content = Content;
    static Footer = Footer;
    static Header = Header;

    toggle = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        const { isOpened } = this.state;
        const children = React.Children.map(this.props.children, child => React.cloneElement(child, { toggle: this.toggle }));

        return (
            <>
                {isOpened ?
                    <div id="modal" className="modal" onClick={e => e.target.id === 'modal' && this.toggle()}>
                        <div className="modal__content">
                            {children}
                        </div>
                    </div>
                    : <button className="btn" onClick={() => this.toggle()}>Toggle modal</button>}
            </>
        );
    }
}
export default Modal;