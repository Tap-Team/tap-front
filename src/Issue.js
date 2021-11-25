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
            imageURL: null,
            isModalOpen: false
        };

        this.handleClickClose = this.handleClickClose.bind(this);
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
            axios.post("https://tap-api.shmn7iii.net/v2/tokens",{
                uid: st.uid,
                token_data: st.base64
            }
                ).then(response => {
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
        var parent = document.getElementById("parent-imageid");
        parent.insertBefore(img, id="imageid" ,src=this.state.imageURL, alt="");
        <img id="imageid" src={this.state.imageURL} alt=""/>
        
        this.toBase64Url(document.getElementById("imageid"));
    }

    toBase64Url(img) {
        var canvas = document.createElement("canvas");

        canvas.width = img.width;
        canvas.height = img.height;
        console.log(img.width);
        console.log(img.height);
        console.log(canvas.width);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");

        this.setState({
            base64: dataURL
        });
      }

      handleClickIssue() {
        this.setState({isModalOpen: true});
      }
      
      handleClickClose() {
        this.setState({isModalOpen: false});
      }

    render() {
        let modal;
        if (this.state.isModalOpen) {
            modal =(
                <div id="modal" className="issue-modal">
                    <div className="upload-modal-inner">
                        <div className="upload-area">
                            <div class="imgaid-parent">
                                <img id="imageid" src={this.state.imageURL} alt=""/>
                            </div>
                            <div>
                                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                                <i className="far fa-image"></i>
                                <p>Drag and drop a image or click</p>
                                <input type="file" accept="image/png" id="input-files" onChange={ (e) => { this.onFileChange(e) } } />
                            </div>
                        </div>
                        <div className="issue-btn">
                            <button onClick={this.issueToken(this.state)}>発行</button>
                        </div>
                        <div>
                            <div className="outer" onClick={() => {this.handleClickClose()}}>
                                <div className="inner">
                                    <label>close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="top-container">
                <h1>Tap!</h1>
                <p>nannkaiikanzino</p>
                <div className="create-btn">
                    <a href onClick={() => {this.handleClickIssue()}}>Create</a>
                </div>
                {modal}
            </div>
        );
        
    }
}


export default Issue;