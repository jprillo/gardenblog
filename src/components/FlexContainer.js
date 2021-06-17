import React from 'react';




const FlexContainer = (
  props
  ) => {
    return ( 
      <div>
        <div className={props.row} height="60vh"  >
         
          <div className="responsive-half" style={{position:"relative", bottom: "0"}}>
            <h3 style={{ textAlign: "left" }}>{props.cycle}</h3>
            <p style={{ padding: "0 2em" }}>
              {props.description}
            </p>
          <div className={props.dir} style={{position: "absolute",top: 0,  height: "100%"}}>
          <img width="100%" style={{height: "100%", objectFit: "fill"}} src={props.curve} alt="hi"></img>            

          </div>
          </div>
          <div className="responsive-half"  >
            <img width="100%" src={props.image} alt="hi"></img>
          </div>
        </div>
      </div>);
}
 
export default FlexContainer;

