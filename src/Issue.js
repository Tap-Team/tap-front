import React from 'react';
import firebase from './firebase';
import axios from 'axios';



class Issue extends React.Component {

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

    

    issueToken(uid,tokenData) {
        axios.post("https://tap-api.shmn7iii.net/v2/tokens",
            {
                uid: uid,
                token_data: tokenData
            }
        )
    }



  


    render() {
        return (
            <div className="App">
                <h1>画像アップロード</h1>
                <form onSubmit={onSubmit}>
                    <input type="file" onChange={handleImage} />
                    <button>Upload</button>
                </form>
                <img src={imageUrl} alt="uploaded" />
            </div>
        );
    }
}

export default Issue;