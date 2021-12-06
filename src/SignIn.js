import React from 'react';
import firebase from './firebase';
import SignInScreen from './SignInScreen';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
    state = {
      loading: true,
      user: null,
    };

    //モーダル
    constructor(props) {
      super(props);
      this.state = {isModalOpen: false};
    }
    handleClickToken(event) {
      this.setState({isModalOpen: true});
      // document.addEventListener('click',this.handleClickClose)
      // event.stopPropagation()
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
            user: user,
            AuthChecked: true
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
      this.setState({
        loading: false,
        user: null
      });
    }

    render() {
      let modal;
      if (this.state.isModalOpen) {
        modal = (
          <div id="modal" className='header-modal' onClick={(event)=>{event.stopPropagation()}}>
            <div className='header-modal-inner'>
              <div className="wallet-area">
                <Link to="/main"  className="wallet-link" style={{ textDecoration: 'none' ,color: 'black'}}>ウォレット</Link>
              </div>

              <div className="logout-area">
                <a href className="logout"
                onClick={() => {this.logout()}}>
                  ログアウト
              </a>
              </div>

              <div className="header-modal-close-btn-area">
                <a href className='header-modal-close-btn'
                onClick={() => {this.handleClickClose()}}>
                  モーダルを閉じる
                </a>
              </div>
            </div>
          </div>
        );
      }

      if(this.state.user) {
          return (
            <div className="header-right" >
              <img className="icon" src={this.state.user.photoURL} alt="icon" onClick={(event) => {this.handleClickToken(event)}}/>
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
