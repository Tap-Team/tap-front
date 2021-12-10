import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from './firebase';

// const fetchCreatedAt = async userId => {
//   const userRes = await axios.get(
//     `https://tap-api.shmn7iii.net/v2/users/${userId}`
//   );
//   // TODO: dataの中にdataがあるのは変なので要変更（バックエンド）
//   // TODO: tokensって命名よりもtokenIds の方が適切？
//   const created_at = userRes.data.data.created_at;
//   return created_at;
// };

// const useCreate = () => {
//   const [create_at, setCreate_at] = useState([]);
//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(async user => {
//       if (!user?.uid) {
//         console.error('ユーザーが取得できませんでした。');
//         return;
//       }
//       const create_at = await fetchCreatedAt(user.uid);
//       setCreate_at(create_at);
//     });
//   }, []);
//   return create_at;
// };

const useUserName = () => {
    const [userName, setUserName] = useState("");
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (!user?.uid) {
          console.error("ユーザーが取得できませんでした。")
          return;
        }
        const getName = await user.displayName;
        setUserName(getName);
      })
    }, []);

    return userName;
  }

const MODALS = {
    DEFAULT: 'default',
    TRANSFER: 'transfer',
    BURN: 'burn',
    BURNCOMP: 'burnComp'
};

function Token2({ image, name, tokenId, userId, time}) {
  const [modalName, setModalName] = useState(null);
  const [text, setText] = useState('');
  const userName = useUserName()

  const handleTokenItemClick = () => {
    setModalName(MODALS.DEFAULT)
  }

  const handleChange = e => {
    setText(() => e.target.value);
  };

  const handleClickClose = () => {
    setModalName(null);
  };

  const handleTransferClick = (userId) => {
    axios.put(
      //ここawait?でもエラーでる
      {
        sender_uid: `https://tap-api.shmn7iii.net/v2/users/${userId}`,
        receiver_uid: 'formに入れたTwitterのIDからuidを貰ってきてここに入れる'
      }
    );
  };

  const handleBurnClick = () => {
    const params = {"uid": userId}
    console.log(userId)
    console.log(tokenId)
    console.log(params)
    axios.delete( `https://tap-api.shmn7iii.net/v2/tokens/${tokenId}`, {data: params})
    setModalName("burnComp")
  };

  const DefaultModal = (
    <div
      id="modal"
      className="modal"
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <div className="modal-inner">
        <img src={image} alt="" width="400" />
      </div>
      <div className="modal-explanation">
        <div className="explanation">
          <h3>所有者</h3>
          <p>{userName}</p>
          <h3>発行時</h3>
          <p>{time}</p>
        </div>
        <div className="btn">
          <button
            className="modal-transfer-btn"
            onClick={() => {
              setModalName("transfer");
            }}
          >
            移転
          </button>
          <button
            className="modal-burn-btn"
            onClick={() => {
              setModalName("burn");
            }}
          >
            焼却
          </button>
          <button
            className="modal-close-btn"
            onClick={() => {
              handleClickClose();
            }}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  )

  const TransferModal = (
    <div
      id="modal"
      className="modal"
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <div className="modal-inner">
        <img src={image} alt="" width="400" />
      </div>
      <div className="modal-explanation">
        <div className="explanation">
          <p>移転先のTwitterIDを入力してください</p>
        </div>
        <div className="btn">
          <button
            className="modal-transfer-btn"
            onClick={() => {
              handleTransferClick();
            }}
          >
            移転
          </button>
          <button
            className="modal-burn-btn"
            onClick={() => {
              setModalName("burn");
            }}
          >
            焼却
          </button>
          <button
            className="modal-close-btn"
            onClick={() => {
              setModalName("default");
            }}
          >
            戻る
          </button>
        </div>
        <div>
          <p>text : {text}</p>
          <input value={text} onChange={handleChange} type="text" />
          <button onClick={() => alert(text)}>値の確認</button>
        </div>
      </div>
    </div>
  );

  const BurnModal = (
    <div
      id="modal"
      className="modal"
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <div className="modal-inner">
        <img src={image} alt="" width="400" />
      </div>
      <div className="modal-explanation">
        <div className="alert">
            <h3>本当に焼却（削除）しますか？</h3>
            <p>消したトークンは二度と戻ってきません...</p>
        </div>
        <div className="btn">
          <button
            className="modal-burn-btn"
            onClick={() => {
              handleBurnClick();
            }}
          >
            OK！
          </button>
          <button
            className="modal-close-btn"
            onClick={() => {
              setModalName("default");
            }}
          >
            だめ！
          </button>
        </div>
      </div>
    </div>
  );
  const BurnCompModal = (
    <div
      id="modal"
      className="modal"
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <div className="modal-inner">
        <img src={image} alt="" width="400" />
      </div>
      <div className="modal-explanation">
            <div className="alert">
                <h3>焼却（削除）しました</h3>
            </div>
        <div className="btn">
          <button
            className="modal-close-btn"
            onClick={() => {
              handleClickClose();
            }}
          >
            OK！
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="token-card">
      <div
        className="token-item"
        onClick={handleTokenItemClick}
      >
        <img src={image} alt="" width="300" />
        <p>{name}</p>
      </div>
      {modalName === MODALS.BURN && BurnModal}
      {modalName === MODALS.TRANSFER && TransferModal}
      {modalName === MODALS.DEFAULT && DefaultModal}
      {modalName === MODALS.BURNCOMP && BurnCompModal}
    </div>
  );
}
export default Token2;