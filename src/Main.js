import React from 'react';
import axios from 'axios';
import Token from './token';


class Main extends React.Component {

    render() {
        let tokenList1 = [
        {
        name:"test",
        image:""
        }
        ]
        let tokenList2 = [
        ];
        let tokenList3 = [
        ];
        
        var getToken = axios.get("https://tap-api.shmn7iii.net/v2/tokens")
            .then(response => {
                console.log(getToken);
                return response.data;
            })
            .then(json => {
                var data = json;
                //トークンの数
                const le = Object.keys(data["data"]).length;
                console.log("test")
                let num = 1;
                for (let i = 1; i<le+1; i++){
                    //変数base64にトークンのbase64の文字列を渡す
                    var base64 = data["data"][i-1]["token_data"];
                    //もしiが３の倍数なら３列目
                    if(i%3===0){
                        tokenList3.push({name3:'test'+String(num),image3:String(base64)});
                        num++;
                    //もしiが1の倍数なら1列目
                    }else if(i%3===1){
                        tokenList1.push({name1:'test'+String(num),image1:String(base64)});
                        num++;
                    //もしiが2の倍数なら2列目
                    }else{
                        tokenList2.push({name2:'test'+String(num),image2:String(base64)});
                        num++;
                    }
                }
                console.log("1");
                console.log(tokenList1);
                console.log("2");
                console.log(tokenList2);
                console.log("3");
                console.log(tokenList3);
                return json;
            })
            .catch(error => {
                console.log(error);
                console.log("失敗");
            });
        
        console.log("aaaaaaaaaaa");
        console.log(tokenList1);


        return (
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='copy-container'>
                        <h1>NFT一覧</h1>
                    </div>
                    <div className='token-container'>
                        <div className="parents">
                            <div className="div-parent1">
                                {tokenList1.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={tokenItem.name}
                                        image={tokenItem.image}
                                        //Warning: Each child in a list should have a unique “key” prop.回避
                                        key = {tokenItem}
                                        />
                                    );
                                    })}
                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent2">
                                {tokenList2.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={tokenItem.name}
                                        image={tokenItem.image}
                                        key = {tokenItem}
                                        />
                                    );
                                    })}
                            </div>
                        </div>
                        <div className="parents">
                            <div className="div-parent3">
                                {tokenList3.map((tokenItem) => {
                                    return (
                                        <Token
                                        name={tokenItem.name}
                                        image={tokenItem.image}
                                        key = {tokenItem}
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