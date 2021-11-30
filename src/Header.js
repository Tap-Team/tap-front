import React from 'react';
import SignIn from './SignIn';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1>Tap!</h1>
                <div className="signin-header">
                    <SignIn />
                </div>
                <Link to="/">Back Test</Link>
                <Link to="/main">Main Test</Link>
            </div>
        );
    }
}

export default Header;