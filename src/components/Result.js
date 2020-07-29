import React from "react"

function Result(props) {
  return (
    <div>
      <h1 style={{display: !props.dogName && "none"}}>
        Result: {props.dogName}
      </h1>
      <img style={{display: !props.imgUrl && "none"}} src={props.imgUrl} alt="" width="600" height="400"/>
      <h3 style={{display: !props.dogBlurb && "none"}}>
        {props.dogBlurb}
      </h3>
    </div>
  );
}

export default Result;