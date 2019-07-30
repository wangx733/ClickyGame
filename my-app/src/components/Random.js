import React from "react";

function Random(props){
    let result=(props.clickedId===props.idSuppose)?"you are right":alert("you guessed wrong");
    
        return <div>
            {result}
        </div>
    }
export default Random;