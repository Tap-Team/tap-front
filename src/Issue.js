import React from 'react';
import firebase from './firebase';
import axios from 'axios';



class Issue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            uid: null,
            base64: null,
            imageURL: null
        };

        this.onFileChange = this.onFileChange.bind(this);
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    user: user,
                    uid: user.uid
                });
            } else{
                this.setState({
                    user: null,
                    uid: null
                });
            }
        });
    }


    issueToken(st) {
        if(st.user != null){
            var issuetoken = axios.post("https://tap-api.shmn7iii.net/v2/tokens",{
                uid: st.uid,
                token_data: st.base64
            }
            ).then(response => {
                console.log(response);
                console.log(issuetoken);
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
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
            <div className="upload-wrapper">
                <div className="upload-container">
                    <div className="upload-area">
                        <div>
                            <img id="imageid" src={this.state.imageURL} alt="" width="700"/>
                        </div>
                        <div>
                            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                            <i class="far fa-image"></i>
                            <p>Drag and drop a image or click</p>
                            <input type="file" accept="image/png" id="input-files" onChange={ (e) => { this.onFileChange(e) } } />
                        </div>
                    </div>
                        <div className="issue-btn">
                            <button onClick={this.issueToken(this.state)}>発行</button>
                        </div>
                </div>
            </div>
        )
    }
}


export default Issue;