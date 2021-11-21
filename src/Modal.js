import React from 'react';

class Modal extends React.Component {

    render(){
      return(
        <div id="modal" className='modal' onclick={(event)=>{event.stopProgation()}}>
        <div className='modal-inner'>
          <div className='modal-header'></div>
          <div className='modal-introduction'>
            <h2>{this.props.name}</h2>
            <img src={this.props.image} alt="" width="300"/>
          </div>
          {/* onClickイベント */}
          <button
            className='modal-close-btn'
            onClick={this.props.onClick}
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
      )
  }}

  export default Modal;