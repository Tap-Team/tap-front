import React from 'react';
import Lesson from './token';

class Main extends React.Component {
    render() {

        let tokenList = {
            //この中にimage:〇〇みたいな感じで画像のID入れていきたい。でもその処理をどこに書けばいいのか分からない案件
        }
        return (
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='copy-container'>
                        <h1>NFT一覧のところだよ！</h1>
                    </div>
                    <div className='token-container'>
                        <div className="parents">
                            <div className="div-parent1">

                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent2">

                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;