import React from 'react';
import Issue from './Issue';

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
                </div>
            </div>
        );
    }
}

export default Top;