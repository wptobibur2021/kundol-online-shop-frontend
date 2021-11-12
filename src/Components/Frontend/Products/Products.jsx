import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import Product from "./Product";
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const url = 'https://shielded-shelf-27362.herokuapp.com/api/products'
        axios.get(url).then(res=>{
            setProducts(res.data)
        })
    },[])

    return (
        <div className="productSectionContainer" style={{padding: '80px 0px'}}>
            <div className="sectionTitle text-center" style={{padding: '20px 0px'}}>
                <h1>Our Recent Product</h1>
                <p>Your Trust Our Forward in Future</p>
            </div>
            <div className="productSections">
                <Container>
                    <Row>
                        {
                            products?.map((p)=><Product key={p._id} product={p}></Product>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Products;