import React from 'react';
import imgBc from './img/blockchain-3446557_1920.jpg';
import imgStop from './img/james-lee-y15-SmlLTe8-unsplash.jpg';
import imgWant from './img/michael-browning-LmxoicGTLDQ-unsplash.jpg';
import imgIdea from './img/mark-fletcher-brown-nN5L5GXKFz8-unsplash.jpg';
import imgNFT from './img/chain-5842371_1920.jpg';
import image1 from './img/bill.png';
import image2 from './img/fullmoon2.png';
import image3 from './img/happa1024.png';
import image4 from './img/koppu1024.png';
import image5 from './img/melon6.png';
import image6 from './img/ume2.png';

function Service() {
    return (
        <div className="service-container">
        <h2>SERVICE</h2>
        <div className="service-card1">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgNFT} alt=""/>
            <div className="service-explain1">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                        <h1>NFT技術を用いた『作品管理プラットフォーム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>NFTにより唯一性を保証、所有者情報を明確に保持</p>
                        <p>アカウントに紐づけたウォレットを作成、トークンを発行</p>
                        <p>発行したトークンと対称の作品データを紐づけて保存</p>
                    </div>
                    <div className="detail1">
                        <p>detail</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card2">
            <div className="gray-box"></div>
            <img className="service-img2" src={imgBc} alt=""/>
            <div className="service-explain2">
                <div className="explain-inner">
                    <div className="explanation-inner-title">
                        <h1>NFTと暗号通貨の切り離し</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>投資的性質を持つ暗号通貨に抵抗意識がある</p>
                        <p>→暗号通貨と親和性の高いNFTを、あえて暗号通貨から切り離して提供するサービス</p>
                        <p>"非Crptpo的なNFTの活用"</p>
                    </div>
                    <div className="detail2">
                        <p>detail</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card3">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgIdea} alt=""/>
            <div className="service-explain1">
                <div className="eplanation-inner">
                    <div className="explanation-inner-title">
                        <h1>『俺が先だがシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>作品の唯一性を保証</p>
                        <p>トークンのタイムスタンプを根拠に「俺が先だが？」できる</p>
                    </div>
                    <div className="detail3">
                        <p>detail</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card4">
            <div className="gray-box"></div>
            <img className="service-img2" src={imgWant} alt=""/>
            <div className="service-explain2">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                    <h1>『それ欲しいシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>トークンの移転機能</p>
                        <p>アカウント名を指定し対応するウォレットにトークンを移転</p>
                        <p>Tap!のプラットフォーム上での金銭的なやりとりは一切発生させない</p>
                    </div>
                    <div className="detail4">
                        <p>detail</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card5">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgStop} alt=""/>
            <div className="service-explain1">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                        <h1>『ちょっと待てシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>不正トークンが発行された場合に対して「ちょっと待て」</p>
                        <p>ブロックチェーンである性質を活かした複数人による認証システム</p>
                    </div>
                    <div className="detail5">
                        <p>detail</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

  export default Service;