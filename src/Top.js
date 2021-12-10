import React from 'react';
import Service from './Service';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import {Link} from 'react-router-dom';
import SliderComponents from "./SliderComponents";
import Main from "./Main";


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

    render() {
        return (
            <div>
                <div className="top-wrapper">
                    <div className="top-container">
                        <div className="top-explain">
                            <h1>NFT without Crypto currency</h1>
                                <div className="top-p1">Tap! allows you to prove ownership by issuing NFT to your digital content.</div>
                                <div className="top-p2">And, you don't need crypto asseets when you issue.</div>
                                <div className="create-btn">
                                    {/* <a href onClick={() => {this.handleClickIssue()}}>Create</a> */}
                                    <Link to="/create"  className="create-link" style={{ textDecoration: 'none'}}>Create</Link>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <SliderComponents /> */}
                <Service />
            </div>
        );
    }
}

export default Top;