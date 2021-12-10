import React from 'react';
import Service from './Service';
import {Link} from 'react-router-dom';


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
                                    <Link to="/create"  className="create-link" style={{ textDecoration: 'none'}}>Create</Link>
                                </div>
                        </div>
                    </div>
                </div>
                <Service />
            </div>
        );
    }
}

export default Top;