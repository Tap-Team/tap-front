import axios from 'axios';
import React from 'react';

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickToken() {
    this.setState({isModalOpen: true});
  }
  
  handleClickClose() {
    this.setState({isModalOpen: false});
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
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <img src={this.props.image} alt=""/>
            </div>
            {/* onClickイベント */}
            <button
              className='modal-close-btn'
              onClick={() => {this.handleClickClose()}}
            >
              とじる
            </button>
            <button
              className='modal-transfer-btn'
              onClick={() => {this.handleClickTransfer(this.props.image)}}
            >
              移転
            </button>
            <button
              className='modal-burn-btn'
              onClick={() => {this.handleClickBurn(this.props.image)}}
            >
              焼却
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='token-card'>
        <div
          className='token-item'
          onClick={() => {this.handleClickToken()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} alt="" width="300"/>
        </div>
        {modal}
      </div>
    );
  }
}

export default Token;