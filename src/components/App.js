import React from 'react';
import Modal from './Modal/Modal';
import InnerContent from './InnerContent';
import '../styles/App.scss';

function App() {


  const modal = (
    <Modal>
      <Modal.Header title="Modal title" />
      <Modal.Content>
        <InnerContent />
      </Modal.Content>
      <Modal.Footer callToActionLabel="Action" />
    </Modal>
  );

  return (
    <div className="app">
      {modal}
    </div>
  );
}
export default App;
