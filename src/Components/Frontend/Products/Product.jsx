import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Product = ({product}) => {
    const {brand, name, desc, photo, price} = product
    return (
        <Col md={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={photo} alt={name} />
                <Card.Body>
                    <Card.Title style={{margin: '20px 0px'}}>{name}</Card.Title>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0px'}}>
                        <h5> Brand: {brand}</h5>
                        <h5> Price: $ {price}</h5>
                    </div>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <NavLink to={`/product/details/${product._id}`} className="btn btn-primary">Purchase Now</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;