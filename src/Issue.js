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
            isModalOpen: false,
            context: null
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
        console.log("issueToken");
        //null
        console.log(this.state.base64);

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
        console.log(this.state.base64);
    }
    
    toBase64Url(img) {
        const image = new Image();
        console.log(img);
        var imageurl = img.getAttribute('src');
        console.log("imageurl");
        console.log(imageurl);
        image.src = imageurl;
        var self = this;
        image.onload = () => {
            var canvas = document.createElement("canvas");
            console.log(img);
            console.log("image");
            console.log(image);
            canvas.width = img.width;
            canvas.height = img.height;
            console.log("img.width");
            console.log(img.width);
            console.log("img.height");
            console.log(img.height);
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            console.log(canvas);
            var dataURL = canvas.toDataURL("image/png");
            self.setState({
                base64: dataURL
            });
            console.log(dataURL);
            console.log(self.state.base64);
        }

        console.log("----------------")
        console.log(image);
        console.log("img.width");
        console.log(img.width);
        console.log("img.height");
        console.log(img.height);
        console.log(this.state.base64);
      }

      handleOnload(img,image){
        var canvas = document.createElement("canvas");
        console.log(img);
        console.log("image");
        console.log(image);
        canvas.width = img.width;
        canvas.height = img.height;
        console.log("img.width");
        console.log(img.width);
        console.log("img.height");
        console.log(img.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        console.log(canvas);
        var dataURL = canvas.toDataURL("image/png");
        this.setState({
            base64: dataURL
        });
        console.log(dataURL);
        console.log(this.state.base64);
      }

      handleClickIssue() {
        this.setState({isModalOpen: true});
      }
      
      handleClickClose() {
        this.setState({isModalOpen: false});
      }

    imgWidthHeight2(img){
        if(img != null){
            if(img.width>img.height){
                //よこなが！！！
                console.log("よこなが")
                return {width:"500px",height:"auto"}
            }else if(img.width<img.height){
                //たてなが！！！
                console.log("たてなが")
                return {width:"auto",height:"500px"}
            }else{
                console.log("else")
                console.log(img.width)
                return {width:"1000px",height:"500px"}
            }
        }else{
            return {width:"500px",height:"500px"}
        }
    }


    render() {
        return (
                <div className="upload">
                    <h3>Create new NFT</h3>
                    <p>Drag and drop a image or click</p>
                    <div className="upload-area" style={{width:"400px",height:"400px"}}>
                        <div>
                            <img id="imageid" src={this.state.imageURL} alt="" style={{width:"400px",height:"400px"}} />
                        </div>
                        <div>
                            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                            <i className="far fa-image"></i>
                            <p>Drag and drop a image or click</p>
                            <input className="file-area" type="file" accept="image/png" id="input-files" onChange={ this.onFileChange } />
                        </div>
                    </div>
                    <div className="issue-btn">
                        <button onClick={this.issueToken.bind(this,this.state)}>発行</button>
                    </div>
            </div>
        );
        
    }
}


export default Issue;