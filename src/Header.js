import React from 'react';
import SignIn from './SignIn';

class Header extends React.Component {
    render() {
        return (
            <div>
                <p>This is HEADER!!!</p>
                <SignIn />
            </div>
        );
    }
}

export default Header;