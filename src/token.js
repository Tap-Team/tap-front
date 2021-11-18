import React from 'react';

class Token extends React.Component {
    constructor(props){
        super(props);
        this.state = {ModalOpen: false};
    }

    handleClickToken() {
        this.setState({isModalOpme: true});
    }

    handleClickClose() {
        this.setState({isModalOpne: false});
    }

    render() {
        let modal;
        if (this.state.isModalOpne) {
            modal = (
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'>
                            <div className='modal-introduce'>
                                <p>TEST</p>
                            </div>
                            <button
                                className='modal-close-btn'
                                onClick={()=> {this.handleClickClose()}}
                            >
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

    return (
        <div className='token-img'>
            <div 
                className='token-item'
                onClick={() => {this.handleClickToken()}}
            >
                <img src={this.props.image} />
            </div>
            {modal}
        </div>
    );
    }

}

export default Token;