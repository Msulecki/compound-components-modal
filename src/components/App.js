import React, { useState } from 'react';
import Modal from './Modal/Modal';
import InnerContent from './InnerContent';
import '../styles/App.scss';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleWindow = (
    <div className="app__toggle">
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>Open modal</button>
    </div>
  );

  const modal = (
    <Modal toggle={setIsOpen}>
      <Modal.Header title="Modal title" toggle={setIsOpen} />
      <Modal.Content>
        <InnerContent />
      </Modal.Content>
      <Modal.Footer callToActionLabel="Action" toggle={setIsOpen} />
    </Modal>
  );

  return (
    <div className="app">
      {isOpen ? modal : toggleWindow}
    </div>
  );
}
export default App;
