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
                        <p>作品に対しNFTを発行することで所有権・唯一性の主張が可能に</p>
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
                        <p>既存のNFTの発行には暗号通貨が必要であり参入ハードルが高まる原因になりがち</p>
                        <p>そこで我々はあえて切り離すというNFTへの新しいアプローチを提案</p>
                        <p>"非Crptpo的なNFTの活用"と位置づけし、NFTに触れたことのないユーザーへNFTに触れる体験を提供</p>
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
                        <p>トークンのタイムスタンプを根拠に「俺が先だが?」ができるシステム</p>
                        <p>「全く同じ画像」の発行を拒否する仕組みにより偽物の発行は不可に</p>
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
                        <p>アカウント名を指定してトークンを移転することが可能</p>
                        <p>Tap!のプラットフォーム上での金銭的なやりとりは一切発生させない</p>
                        <p>Comming soon...</p>
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
                        <p>ブロックチェーンを活用し、参加者による認証システムを用意</p>
                        <p>不正なトークンが発行された場合はトークンに対して「ちょっと待て」</p>
                        <p>「ちょっと待て」されたトークンにはフラグが建てられ、参加者により検証</p>
                        <p>期間内に所定数以上の不正報告があればトークンは燃やされるorブロックは破棄される</p>
                        <p>Comming soon...</p>
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