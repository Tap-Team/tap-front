import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {

        return (
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="Tap">
                        <p>Tap!</p>
                    </div>
                    <div className="Privacy-Policy">
                        <Link to="/privacypolicy"  className="link-black" style={{ textDecoration: 'none'}}>PrivacyPolicy</Link>
                    </div>
                    <div className="Terms-of-Service">
                        <Link to="/tos"  className="link-black" style={{ textDecoration: 'none'}}>Terms of Service</Link>
                    </div>
                </div>
                <div className="copy">
                    <p>©2021 Tap!Team</p>
                </div>
            </div>
        );
    }
}

export default Footer;