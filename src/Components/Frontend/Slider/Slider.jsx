import React from 'react';
import {Carousel, Col} from "react-bootstrap";

const Slider = () => {
    return (
        <div className='homePageBannerSections'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{width: '100%', height: "450px", objectFit: 'cover'}}
                        src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg"
                        alt="First slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>First slide label</h3>*/}
                    {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%', height: "450px", objectFit: 'cover'}}
                        src="https://images.pexels.com/photos/761984/pexels-photo-761984.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%', height: "450px", objectFit: 'cover'}}
                        src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;