import React from 'react';
import axios from 'axios';
import Token from './Token';


class Main extends React.Component {

    render() {
        let tokenList1 = [
            {
            name: 'HTML & CSS',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
            }
        ];
        let tokenList2 = [
            {
            name: 'HTML & CSS',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
            }
        ];
        let tokenList3 = [
            {
            name: 'HTML & CSS',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
            }
        ];

        //test
        tokenList1.push({name:'A',image:'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg'});

        var getToken = axios.get("https://tap-api.shmn7iii.net/v2/tokens")
            .then(response => {
                console.log(getToken);
                return response.data;
            })
            .then(json => {
                var data = json;
                //トークンの数
                const le = Object.keys(data["data"]).length;
                //1列目2列目3列目それぞれでimage1→image2ってできる用の変数
                console.log("test")
                for (let i = 1; i<le+1; i++){
                    //変数base64にトークンのbase64の文字列を渡す
                    var base64 = data["data"][i-1]["token_data"];
                    //どこまで動いてるのか確認用
                    console.log("初期")
                    //もしiが３の倍数なら３列目
                    if(i%3===0){
                        tokenList3.push({name:'test',img:base64})
                    //もしiが1の倍数なら1列目
                    }else if(i%3===1){
                        tokenList1.push({name:'test',img:base64})
                    //もしiが2の倍数なら2列目
                    }else{
                        tokenList2.push({name:'test',img:base64})
                    }
                }
                return json;
            })
            .catch(error => {
                console.log(error);
                console.log("失敗");
            });


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
                                        name={tokenItem.name}
                                        image={tokenItem.image}
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
                                        name={tokenItem.name}
                                        image={tokenItem.image}
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
                                        name={tokenItem.name}
                                        image={tokenItem.image}
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