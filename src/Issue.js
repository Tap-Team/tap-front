import React from 'react';
import firebase from './firebase';
import axios from 'axios';
import testImage from './img/blockchain-3446557_1920.jpg';




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
                    uid: user.uid,
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
        console.log(st);
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
        var newImageURL = imageURL;
        console.log(newImageURL);
        this.setState({
            imageURL: newImageURL
        });
        console.log(this.state.imageURL);
        console.log(this.state);
        //this.toBase64Url(document.getElementById("imageid"));
    }

    
    componentDidUpdate(prevProps,prevState){
        if(this.state.imageURL !== prevState.imageURL){
            var test = document.getElementById("imageid");
            console.log("document.getElementById");
            console.log(test);
            console.log(this.state);
            console.log(document);
            this.toBase64Url(document.getElementById("imageid"));
        }
    }

    toBase64Url(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        console.log(img.width);
        console.log(img.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        //ここimage/pngじゃなくてimageidでは？
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
                            <div>
                                {/* ここのthis.state.imageURLが更新されてない？ */}
                                <img id="imageid" src={this.state.imageURL} alt="" style={{width:"100%", height:"100%"}} />

                            </div>
                            <div>
                                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                                <i className="far fa-image"></i>
                                <p>Drag and drop a image or click</p>
                                {/*クリックされた既にある画像に対して処理が行われてる。一回目に最初に何もないupload-areaをクリックした際にnullのstateの更新がされて、二回目に一回目の画像をクリックするので一回目の画像がstateに更新される*/}
                                <input type="file" accept="image/png" id="input-files" onChange={ this.onFileChange } />
                            </div>
                        </div>
                        <div className="issue-btn">
                            <button onClick={this.issueToken.bind(this,this.state)}>発行</button>
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