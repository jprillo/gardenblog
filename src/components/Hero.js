import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const Hero = (
    props

) => {
    return (  
       
<Jumbotron>
    <Container className="heroContainer" >
        <Row className=" position-relative hero row">
        <Col >
            <img className="butterfly-image" width="105%" src={props.image} alt={props.title} />

            
            </Col>
            <Col>
                <div className="hero-description"> 
                    <h1>{props.title}</h1> 
                    <p> {props.description}</p>
                </div>
           
  <div className="box-container text-center">

    <div className="box" >
        <h4>Host Plant</h4>
    <p>{props.host}</p>
    </div>
    <div className="box">
    <h4>Life Span</h4>
    <p>{props.lifespan}</p>
</div>
<div className="box">
<h4>Scientific Name</h4>
    <p>{props.latinname}</p>
</div>
</div>

            </Col>

           
          
        </Row>
        
 
  </Container>


</Jumbotron>

    );
}
 
export default Hero;