import React from 'react';

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickToken() {
    this.setState({isModalOpen: true});
  }
  
  // handleClickCloseメソッドを定義してください
  handleClickClose() {
    this.setState({isModalOpen: false});
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
          <img src={this.props.image} alt=""/>
        </div>
        {modal}
      </div>
    );
  }
}

export default Token;