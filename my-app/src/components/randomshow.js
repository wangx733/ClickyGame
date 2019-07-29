import React from "react";

function Randomshow(props) {
    let number=0;
    let onShow=function(){
        number=Math.floor(Math.random() * 9); 
       console.log(number);
      }
      onShow();

    return <span>
        <span>{props.image[number].question}</span>
        <br/>
        <div>{props.image[number].id}</div>
    </span>
}
export default Randomshow;