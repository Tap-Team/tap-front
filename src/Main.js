import React from 'react';
import Lesson from './token';

class Main extends React.Component {
    render() {

        let tokenList1 = {
            //この中にimage:〇〇みたいな感じで画像のID入れていきたい。でもその処理をどこに書けばいいのか分からない案件
        }
        let tokenList2 = {

        }
        let tokenList3 = {

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
                                <p>parent1</p>
                                {tokenList1.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={lessonItem.name}
                                        image={lessonItem.image}
                                        />
                                    );
                                    })}
                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent2">
                                <p>parent2</p>
                                {tokenList2.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={lessonItem.name}
                                        image={lessonItem.image}
                                        />
                                    );
                                    })}
                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent3">
                                <p>parent3</p>
                                {tokenList3.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={lessonItem.name}
                                        image={lessonItem.image}
                                        />
                                    );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;