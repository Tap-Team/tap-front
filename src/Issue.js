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
            context: null,
            loading: true,
            laoding: false
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
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            self.setState({
                base64: dataURL
            });
            console.log(dataURL);
            console.log(self.state.base64);
        }
      }

      handleOnload(img,image){
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
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
        return (
                <div className="upload">
                    <div className="CreateNewNFT">
                        <p>Create new NFT</p>
                    </div>
                    <div className="drop">
                        <p>Drag and drop a image or click</p>
                        <p>Small png image please :-)</p>
                    </div>
                    <div className="upload-area" style={{width:"auto",height:"auto"}}>
                        <div className="imageidParent">
                            <img id="imageid" src={this.state.imageURL} alt="" style={{width:"auto",height:"350"}}/>
                            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                            <input className="file-area" type="file" accept="image/png" id="input-files" onChange={ this.onFileChange } />
                        </div>
                    </div>
                    <div className="issue-btn">
                        <a href onClick={this.issueToken.bind(this,this.state)}>発行</a>
                    </div>
            </div>
        );
        
    }
}


export default Issue;