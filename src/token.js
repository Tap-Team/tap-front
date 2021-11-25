import axios from 'axios';
import React from 'react';

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
    this.handleClickClose = this.handleClickClose.bind(this);
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

  //一旦保留
  handleClickTransfer(tokenId) {
    axios.post("https://tap-api.shmn7iii.net/v2/tokens/"+String(tokenId));
  }

  handleClickBurn(tokenId) {
    axios.delete("https://tap-api.shmn7iii.net/v2/tokens/"+String(tokenId));
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div id="modal" className='modal' onClick={(event)=>{event.stopPropagation()}}>
          <div className='modal-inner'>
            <div className='modal-img'>
              <img src={this.props.image} alt="" width="400"/>
            </div>
            <div className="modal-explanation">
              <div className="explanation">
                <p>所有者</p>
                <p>発行日</p>
                <p>移転歴</p>
              </div>
              <div className="btn">
                <button
                  className='modal-transfer-btn'
                  onClick={() => {this.handleClickClose()}}
                >
                  移転
                </button>
                <button
                  className='modal-burn-btn'
                  onClick={() => {this.handleClickClose()}}
                >
                  焼却
                </button>
                <button
                  className='modal-close-btn'
                  onClick={() => {this.handleClickClose()}}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='token-card'>
        <div
          className='token-item'
          onClick={(event) => {this.handleClickToken(event)}}
        >
          <img src={this.props.image} alt=""/>
          <p>{this.props.name}</p>
        </div>
        {modal}
      </div>
    );
  }
}

export default Token;