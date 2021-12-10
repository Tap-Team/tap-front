// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import firebase from './firebase';
// function SliderComponents() {
//   const [tokens, setTokens] = useState([]);
//   const COLUMN = 3;
//   const setting = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       sliderToShow: 1,
//       sliderToScroll: 1
//   };

//   useEffect(() => {
//     const fn = async () => {
//     await firebase.auth().onAuthStateChanged(() => {
//     })
//     const tokenRes = await axios.get(
//     "https://tap-api.shmn7iii.net/v2/tokens"
//     );

//     const len = Object.keys(tokenRes.data.data).length
//     //tokenRes.dataはdataの中の｛　、　、　、token_data}のひとかたまり
//     for(let i = 0; i<len; i++){
//         const tokenIds = tokenRes.data.data[i].token_data;
//         setTokens(tokenIds)
//     }
//     };
//     fn();
//   }, []);

//         return(
//             <div className="main-wrapper">
//                 <div className="main">
//                     <div className="copy-container">
//                         <h1>NFT一覧</h1>
//                     </div>

//                     <div className="token-container">
//                         {[...Array(COLUMN)].map((_, i) => (
//                         <div className="parents">
//                             {tokens
//                                 .filter((_, index) => index %
//                                 COLUMN === i)
//                                 .map(({ name, image }, index) => {
//                                     // return <Token name={name} image={image} key={index} />;
//                                 })}
//                         </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         )
// }

// export default SliderComponents;





{/* <Slider {...this.settings}>
{this.images.map((img) => {
    return (
        <div className="picture">
            <img src={img} alt="pictuer" />
            );
        })}
</Slider> */} 