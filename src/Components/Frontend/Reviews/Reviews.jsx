import React, {useEffect, useState} from 'react';
import {Container, Row, Card,Button, Image,Col} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import Rating from "react-rating";
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import Review from "./Review";
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        const url = 'https://shielded-shelf-27362.herokuapp.com/user/reviews'
        axios.get(url).then(res=>{
            console.log(res.data)
           setReviews(res.data)
        })
    },[])
    return (
            <div className="ratingSectionsContainer" style={{padding: '80px 0px'}}>
                <div className="sectionTitle text-center" style={{padding: '20px 0px'}}>
                    <h1>Our Recent Testimonial</h1>
                    <p>Your Trust Our Forward in Future</p>
                </div>
                <Container style={{textAlign: 'center'}}>
                    <Row>
                        {
                            reviews?.map((r)=>(
                                <Col md={3}>
                                    <Card style={{border: 'none'}}>
                                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
                                            <Image style={{width: '80px', height: '80px', objectFit: 'cover', margin: 'auto 0'}}
                                                   src={r.photo} roundedCircle/>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{r.name}</Card.Title>
                                            <Card.Text>
                                                {r.desc}
                                            </Card.Text>
                                            <Rating
                                                readonly
                                                initialRating={r.rating}
                                                emptySymbol={<FaStarHalfAlt/>}
                                                fullSymbol={<FaStar/>}
                                            ></Rating>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                        {/*<OwlCarousel className='owl-theme' loop margin={10} nav items={4} dots={false}>*/}
                        {/*    {*/}
                        {/*        reviews?.map((r)=>(*/}
                        {/*            <div className='item'>*/}
                        {/*                */}
                        {/*            </div>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</OwlCarousel>*/}
                    </Row>
                </Container>
            </div>
    );
};

export default Reviews;