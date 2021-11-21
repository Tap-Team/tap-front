import React from 'react';
import firebase from './firebase';
import SignInScreen from './SignInScreen';
import axios from 'axios';


class SignIn extends React.Component {
    state = {
      loading: true,
      user: null
    };

    //モーダル
    constructor(props) {
      super(props);
      this.state = {isModalOpen: false};
    }
    handleClickToken(event) {
      this.setState({isModalOpen: true});
      document.addEventListener('click',this.handleClickClose)
      event.stopPropagation()
    }
    
    handleClickClose() {
      this.setState({isModalOpen: false});
      document.removeEventListener('click',this.handleClickClose)
    }
  
    componentWillUnmount(){
      document.removeEventListener('click',this.handleCliskClose)
    }

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
      console.log("logout");
    }

    render() {
      let modal;
      if (this.state.isModalOpen) {
        modal = (
          <div id="modal" className='modal' onClick={(event)=>{event.stopPropagation()}}>
            <div className='modal-inner'>
              <div className='modal-choice'>                
              </div>
              <button
                className='modal-close-btn'
                onClick={() => {this.handleClickClose()}}
              >
                とじる
              </button>
              <button
               onClick={() => {this.logout()}}>
                Logout
              </button>
            </div>
          </div>
        );
      }

      if(this.state.user) {
          return (
            <div className="header-right" onClick={(event) => {this.handleClickToken(event)}}>
              <img className="icon" src={this.state.user.photoURL} alt="icon" />
              {modal}
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
