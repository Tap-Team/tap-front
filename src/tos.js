import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const MODALS = {
  TOS: 'tos',
};

function Tos() {
  const [modalName, setModalName] = useState("tos");

  const handleClickClose = () => {
    setModalName(null);
  };

  const TosModal = (
    <div id="modal" className="modal" onClick={event => { event.stopPropagation();}}>
        <div className="tos-modal">
            <h1>Terms of Service</h1>
            <p>Tap!におけるいかなるトラブルにおいても、Tap! Teamは一切の責任を負いません。</p>
            <div className="tosPrivacy-btn">
                <button className="modal-close-btn" onClick={() => {handleClickClose();}}>
                    <Link to="/"  className="link-white" style={{ textDecoration: 'none'}} onClick={() => {handleClickClose();}}>OK!</Link>
                </button>
                <button className="modal-switch-btn" onClick={() => {handleClickClose();}}>
                    <Link to="/privacypolicy"  className="link-white" style={{ textDecoration: 'none'}}>PrivacyPolicy</Link>
                </button>
            </div>
        </div>
    </div>
  )

  return (
    <div className="token-card">
      {modalName === MODALS.TOS && TosModal}
    </div>
  );
}
export default Tos;