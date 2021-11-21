import React from 'react';
import firebase from './firebase';
import SignInScreen from './SignInScreen';


class SignIn extends React.Component {
    state = {
      loading: true,
      user: null
    };

    componentDidMount() {
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

    render() {
      if(this.state.user) {
          return (
            <div className="header-right">
              <img className="icon" src={this.state.user.photoURL} alt="icon" />
              <button onClick={this.logout}>Logout</button>
            </div>
          );
      } else {
          return (
            <div className="twitter-auth">
              <SignInScreen />
            </div>
          );
      }
    }
  }

export default SignIn;
