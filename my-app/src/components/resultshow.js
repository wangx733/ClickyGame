import React from "react";

function Resultshow(props){
    let result=(props.clickedId===props.idSuppose)?"you are right":"It doesn't matter";
    
    // console.log(props.clickedId);
    // console.log(props.idSuppose)
        return <div>
            {result}
        </div>
    }
export default Resultshow;