import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Token2 from './token2';
import firebase from './firebase';
import Sample from './SpinnerPage';

const fetchTokens  = async (userId) => {
  const userRes = await axios.get(
    `https://tap-api.shmn7iii.net/v2/users/${userId}`
  );
    
  // TODO: dataの中にdataがあるのは変なので要変更（バックエンド）
  // TODO: tokensって命名よりもtokenIds の方が適切？
  const tokenIds = userRes.data.data.tokens;

  // 全てのtokenIdに紐づくデータにアクセスするためのリクエストを作成
  const requests = tokenIds.map(tokenId =>
    axios.get('https://tap-api.shmn7iii.net/v2/tokens/' + String(tokenId))
  );

  // 作成したリクエストを全部、並列で実行
  // tokenRess = 実行結果全部の配列
  const tokenRess = await Promise.all(requests);

  // 実行結果をもとに、name と image のセットを作成
  const fetchedTokens = tokenRess.map(tokenRes => {
    // const name = '無題';
    const image = tokenRes.data.data.token_data;
    const tokenId = tokenRes.data.data.token_id;
    return { image, tokenId, userId };
  });

  return fetchedTokens;
}

const useTokens = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user?.uid) {
        console.error("ユーザーが取得できませんでした。")
        return;
      }
      const fetchedTokens = await fetchTokens(user.uid);
      setTokens(fetchedTokens);
    })
  }, []);

  console.log(tokens)
  return tokens;
}

function Main() {

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  const tokens = useTokens();
  const COLUMN = 3;
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="copy-container">
          <h1>NFT一覧</h1>
        </div>
        <div className="App">
          <div style={style}>
            <Sample />
          </div>
        </div>
        {/* <SpinnerPage /> */}
        <div className="token-container">
          {[...Array(COLUMN)].map((_, i) => (
            <div className="parents">
              {tokens
                .filter((_, index) => index % COLUMN === i)
                .map(({ name, image,tokenId, userId }, index) => {
                  return <Token2 name={name} image={image} key={index} tokenId={tokenId} userId={userId}/>;
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
