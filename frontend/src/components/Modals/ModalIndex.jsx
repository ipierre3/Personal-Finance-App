import React, { useState } from 'react';
import EditAccountModal from './EditAccountModal';
import './ModalIndex.css'

const ModalIndex = (props) => {
  const [modalBody, setModalBody] = useState(props.location);
  const [location, setLocation] = useState(props.location);
  const [initialLocation, setInitialLocation] = useState(props.location);

  const closeModal = () => {
    props.toggleModal();
  };

  const accountBody = () => {
    if (modalBody !== 'accounts') {
      setModalBody('accounts');
      setLocation('accountIndex');
    }
  };

  const userBody = () => {
    if (modalBody !== 'user') {
      setModalBody('user');
      setLocation('user');
    }
  };

  let accountsClass = '';
  let userClass = '';
  let divClass = 'modal-index';
  const addAccountModal = <EditAccountModal toggleModal={closeModal} />;

  const modal = modalBody ===  addAccountModal;

  if (location === 'user') {
    userClass = 'selected';
    accountsClass = '';
  } else if (location === 'accountIndex') {
    accountsClass = 'selected';
    userClass = '';
  } else if (location === 'accountShow') {
    accountsClass = 'selected';
    userClass = '';
  }
  if (initialLocation === 'accountIndex') {
    divClass = 'modal-account-index';
  } else if (initialLocation === 'accountShow') {
    divClass = 'modal-account-show';
  }

  return (
    <div>
      <div onClick={closeModal} className="transparent-wrapper"></div>
        <div className={divClass}>
          <header className="modal-index-header">
            <ul className="modal-header-list group">
              <li className={accountsClass} onClick={accountBody}>
                <i id="fa-account-modal" className="fa fa-folder-open"></i>
                <p>Accounts</p>
              </li>
              <li className={userClass} onClick={userBody}>
                <i id="fa-user-modal" className="fa fa-user fa-modal"></i>
                <p>About Me</p>
              </li>
            </ul>
          </header>
          {modal}
          <footer className="modal-index-footer submit group">
            <button onClick={closeModal}>Close</button>
          </footer>
      </div>
    </div>
  );
}

export default ModalIndex;