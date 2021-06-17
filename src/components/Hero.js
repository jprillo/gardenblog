import React from 'react';




const Hero = (
    props

) => {
    return (  

        
            <div className="heroContainer" >
                <div className="row">
                    <div className="responsive-half butterfly-image" >
                        <img width="100%" src={props.image} alt={props.title} />
                        <button className="slideshow-btn">SlideShow &rarr; </button>
                    </div>
                    <div className="responsive-half hero-description" >
                        <h1>{props.title}</h1>
                        <p> {props.description}</p>


                        <div className="box-container ">

                            <div className="box text-center" >
                                <h4>Host Plant</h4>
                                <p>{props.host}</p>
                            </div>
                            <div className="box text-center">
                                <h4>Life Span</h4>
                                <p>{props.lifespan}</p>
                            </div>
                            <div className="box text-center">
                                <h4>Scientific Name</h4>
                                <p>{props.latinname}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
 
export default Hero;