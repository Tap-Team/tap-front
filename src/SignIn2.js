 // MyComponents.js
 import React,{ useEffect,useCallback,useState }  from 'react';
 import './modals.css';


 // 子コンポーネント（モーダル）
 function Modal(props){

   return(
       <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
         <div>
           <p>モーダル</p>
           <button onClick={props.onClick}>閉じるボタン</button>
         </div>
       </div>
   )
 }


 // 親コンポーネント
 export default function Modal_FunctionComponent(){

   const[isModalOpen,setIsModalOpen]=useState(false)

   const closeModal= useCallback(() =>{
     setIsModalOpen(false)
     document.removeEventListener('click',closeModal)
   },[])

   useEffect(()=>{
     return ()=>{
       document.removeEventListener('click',closeModal)
     }
   },[closeModal])


   function openModal(event){
     setIsModalOpen(true)
     document.addEventListener('click',closeModal)
     event.stopPropagation()
   }


   return (
     <div className="modalpage">
       <h2>関数コンポーネント</h2>
       <button onClick={(event)=>{openModal(event)}}>モーダルを開く</button>

       {isModalOpen? <Modal onClick={(event)=>{closeModal(event)}}/> :""}

     </div>
   );
 }

export default Modal_FunctionComponent;
