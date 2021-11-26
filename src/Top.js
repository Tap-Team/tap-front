import React from 'react';
import Issue from './Issue';
import imgBc from './img/blockchain-3446557_1920.jpg';
import imgStop from './img/james-lee-y15-SmlLTe8-unsplash.jpg';
import imgWant from './img/michael-browning-LmxoicGTLDQ-unsplash.jpg';
import imgIdea from './img/mark-fletcher-brown-nN5L5GXKFz8-unsplash.jpg';
import imgNFT from './img/chain-5842371_1920.jpg';

class Top extends React.Component {

    render() {
        return (
            <div className="top-wrapper">
                <Issue />
                <div className="NFTs-container">
                    <p>NFTs</p>
                </div>
                <div className="service-container">
                    <p>SERVICE</p>
                    <div className="service-card1">
                        <div className="gray-box"></div>
                        <img className="service-img1" src={imgNFT} alt=""/>
                        <div className="service-explain1">
                            <h1>NFT技術を用いた</h1>
                            <h1>『作品管理プラットフォーム』</h1>
                            <p></p>
                            <p>NFTにより唯一性を保証、所有者情報を明確に保持</p>
                        </div>
                    </div>
                    <div className="service-card2">
                        <div className="gray-box"></div>
                        <img className="service-img2" src={imgBc} alt=""/>
                        <div className="service-explain2">
                            <h1>NFTと暗号通貨の切り離し</h1>
                            <p>暗号通貨の投資的性質に対するハードルを云々</p>
                        </div>
                    </div>
                    <div className="service-card3">
                        <div className="gray-box"></div>
                        <img className="service-img1" src={imgIdea} alt=""/>
                        <div className="service-explain1">
                            <h1>『俺が先だがシステム』</h1>
                            <p>メモ：唯一性より良い言葉あるかも。タイムスタンプとか専門用語出てきたらリンクっぽくしてモーダル表示で解説あると便利かも</p>
                            <p>トークンのタイムスタンプを根拠に作品の唯一性を保証</p>
                        </div>
                    </div>
                    <div className="service-card4">
                        <div className="gray-box"></div>
                        <img className="service-img2" src={imgWant} alt=""/>
                        <div className="service-explain2">
                            <h1>『それ欲しいシステム』</h1>
                            <p>トークンの移転機能</p>
                        </div>
                    </div>
                    <div className="service-card5">
                        <div className="gray-box"></div>
                        <img className="service-img1" src={imgStop} alt=""/>
                        <div className="service-explain1">
                            <h1>『ちょっと待てシステム』</h1>
                            <p>不正トークン発行時に「ちょっと待て」</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Top;