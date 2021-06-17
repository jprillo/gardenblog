import React from 'react';




const Range = (
  props
  ) => {
    return ( 
      <div>
        <div className="row range-container">
        <div className="responsive-half">
            <h3 style={{ textAlign: "left" }}>{props.cycle}</h3>
            <p style={{ padding: "0 2em" }}>
              {props.description}
            </p>
          </div>
          <div className="responsive-half" >
            <img width="100%" src={props.image} alt="hi"></img>
          </div>
    
        </div>
      </div>);
}
 
export default Range;

