import React from 'react';
import firebase from './firebase';
import axios from 'axios';

class Issue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            base64: null,
            imageURL: null
        };

        this.onFileChange = this.onFileChange.bind(this);
      }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        });
    }

    issueToken() {
        axios.post("https://tap-api.shmn7iii.net/v2/tokens",
            {
                uid: this.state.user.uid,
                token_data: this.state.base64
            }
        )
    }

    onFileChange(e) {
        const imageFile = e.target.files[0];
        const imageURL = URL.createObjectURL(imageFile);
        this.setState({
            imageURL: imageURL
        });

        this.toBase64Url(document.getElementById("imageid"))
    }

    toBase64Url(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");

        this.setState({
            base64: dataURL
        });
      }

    render() {
        return (
            <div>
                <input type="file" accept="image/png" onChange={
                    (e) => {
                        this.onFileChange(e)
                    }
                } />
                <img id="imageid" src={this.state.imageURL} alt="gazo-" />
                <button onClick={this.issueToken}>発行</button>
            </div>
        )
    }
}


export default Issue;