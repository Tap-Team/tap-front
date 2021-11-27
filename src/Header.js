import React from 'react';
import SignIn from './SignIn';

class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1>Tap!</h1>
                <div className="signin-header">
                    <SignIn />
                </div>
            </div>
        );
    }
}

export default Header;