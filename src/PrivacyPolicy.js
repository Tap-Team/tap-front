import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const MODALS = {
  PRIVACY: 'privacy',
};

function PrivacyPolicy() {
  const [modalName, setModalName] = useState("privacy");

  const handleClickClose = () => {
    setModalName(null);
  };

  const PRIVACYModal = (
    <div id="modal" className="modal" onClick={event => { event.stopPropagation();}}>
        <div className="privacy-modal">
            <h1>Privacy Policy</h1>
            <p>Tap!は利用ユーザーに関するいかなる情報の収集・利用をしません。また、サービスの管理はTap! Teamのみが権限を持ち、他のいかなる人物の関与・監視の可能性はありません。</p>
            
            <div className="tosPrivacy-btn">
                <button className="modal-close-btn" onClick={() => {handleClickClose();}}>
                    <Link to="/"  className="link-white" style={{ textDecoration: 'none'}} onClick={() => {handleClickClose();}}>OK!</Link>
                </button>
                <button className="modal-switch-btn" onClick={() => {handleClickClose();}}>
                    <Link to="/tos"  className="link-white" style={{ textDecoration: 'none'}}>Terms of Service</Link>
                </button>
            </div>
        </div>
    </div>
  )

  return (
    <div className="token-card">
      {modalName === MODALS.PRIVACY && PRIVACYModal}
    </div>
  );
}
export default PrivacyPolicy;
