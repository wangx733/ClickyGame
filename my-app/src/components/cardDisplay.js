import React from "react";

function Display(props){

    return <div className="images" onClick={() =>props.onClick(props.id)}>
    <img src={props.picture} alt="bird"></img>
  </div>
}
export default Display;
