import React from 'react';

class Footer extends React.Component {
    render() {

        return (
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="Tap">
                        <p>Tap!</p>
                    </div>
                    <div className="Privacy-Policy">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="Terms-of-Service">
                        <p>Terms of Service</p>
                    </div>
                    <div className="Terms">
                        <p>Terms</p>
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