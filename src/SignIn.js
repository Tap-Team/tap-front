import React from 'react';
import firebase from '../firebase';
import SignInScreen from './SignInScreen';


class SignIn extends React.Component {
    state = {
        loading: true,
        user: null
    };

    componentDivMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                loading: false,
                user: user
            });
        });
    }
    logout() {
        firebase.auth().signOut();
    }

    render(){
        if (this.state.loading) return <div>loading</div>;
        return (
            <div>
                Username: {this.state.user && this.state.user.displayName}
                <br />
                {this.state.user ?
                    (<button onClick={this.logout}>Logout</button>) :
                    (<SignInScreen />)
                }
            </div>
        );
    }
}

export default SignIn;
