import React from 'react';
import firebase from './firebase';
import SignInScreen from './SignInScreen';
import axios from 'axios';


class SignIn extends React.Component {
    state = {
      loading: true,
      user: null
    };

    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({
            loading: false,
            user: user
          });
          var createAcount = axios.post("https://tap-api.shmn7iii.net/v2/users",{
                uid: user.uid
              }
            ).then(response => {
                console.log(createAcount);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        }

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
