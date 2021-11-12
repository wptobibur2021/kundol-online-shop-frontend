import React from 'react';
import {Button, Card, Image} from "react-bootstrap";
import Rating from "react-rating";
const Review = ({review}) => {
    const {name, photo,rating,desc} = review
    return (
        <div className='item'>
            <Card style={{border: 'none'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px',}}>
                    <Image style={{width: '80px', height: '80px', objectFit: 'cover', margin: 'auto 0'}}
                           src={photo} roundedCircle/>
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;