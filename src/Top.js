import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Issue from './Issue';
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


class Top extends React.Component {
    settings = {
        dots: true,
        infinite: true,
        spped: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        arrow: true,
    };

    images = [image1,image2, image3, image4, image5, image6]
    render() {
        return (
            <div className="top-wrapper">
                <Issue />
                <div className="NFTs-container">
                    <h2>NFTs</h2>
                    <Slider {...this.settings}>
                        {this.images.map((img) => {
                            return (
                                <div>
                                    <img src={img} alt="pictuer" />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className="service-container">
                    <h2>SERVICE</h2>
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
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            </div>
        );
    }
}

export default Top;