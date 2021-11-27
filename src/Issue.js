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
        this.setState({
            imageURL: newImageURL
        });
        console.log("1");
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.imageURL !== prevState.imageURL){
            console.log("2");
            this.toBase64Url(document.getElementById("imageid"));
            console.log("3");
        }
    }

    toBase64Url(img) {
        //オブジェクトの生成
        var image = new Image();
        var imageurl = img.getAttribute('src');
        image.src = imageurl;
        console.log("imageurl");
        console.log(imageurl);
        image.src = imageurl;
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        //canvas.→img.
        var ctx = canvas.getContext("2d");
        console.log(img);
        console.log("image");
        console.log(image);
        console.log("img.width");
        console.log(img.width);
        console.log("img.height");
        console.log(img.height);
        image.onload = function(){
            ctx.drawImage(image, 0, 0);
            //ここimage/pngじゃなくてimageidでは？
            var dataURL = canvas.toDataURL("image/png");
            this.setState({
                base64: dataURL
            });
        }
      }

      handleClickIssue() {
        this.setState({isModalOpen: true});
      }
      
      handleClickClose() {
        this.setState({isModalOpen: false});
      }

    //もし画像の高さが500pxより小さかったらwidthを100%、heightを画像の高さに。そうじゃなかったらwidthを画像の幅に、heightを500pxに。
    imgWidth(){
        if (this.state.imageURL!=null){
            if(this.state.imageURL.weight<="500px"){
                console.log("hri:h<=500px");
                return "100%";
            }else{
                console.log("width:h>500px");
                return "auto";
            }
        }else{
            console.log("width:h=null");
            return "100%";
        }
    }

    imgHeight(){
        if (this.state.imageURL!=null){
            if(this.state.imageURL.height<="500px"){
                console.log("height:<=500px");
                //this.state.imageURLになんか違うの入ってる？
                return "auto";
            }else{
                //今絶対これになってる（500が500pxって認識されてない
                console.log("height:>500px");
                return "100%";
            }
        }else{
            console.log("height:null");
            return "100%";
        }
    }

    render() {
        let modal;
        if (this.state.isModalOpen) {
            modal =(
                <div id="modal" className="issue-modal">
                    <div className="upload-modal-inner">
                        <div className="upload-area" style={{width:"100%", heght:"100%"}}>
                            <div>
                                {/* ここのthis.state.imageURLが更新されてない？ */}
                                <img id="imageid" src={this.state.imageURL} alt="" style={{width:this.imgWidth(), height:this.imgHeight()}} />

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
                <div className="top-explain">
                    <h1>NFT without Cryptos</h1>
                        <div className="top-p1">Tap! allows you to prove ownership by issuing NFT to your digital content.</div>
                        <div className="top-p2">And, you don't need crypto asseets when you issue.</div>
                        <div className="create-btn">
                            <a href onClick={() => {this.handleClickIssue()}}>Create</a>
                        </div>
                </div>
                {modal}
            </div>
        );
        
    }
}


export default Issue;