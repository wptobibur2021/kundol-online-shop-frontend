import React, {useEffect, useState} from 'react';
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import Slider from "../../Components/Frontend/Slider/Slider";
import Reviews from "../../Components/Frontend/Reviews/Reviews";
import Subscribe from "../../Components/Frontend/Subscribe/Subscribe";
import {Container, Row} from "react-bootstrap";
import Product from "../../Components/Frontend/Products/Product";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const url = 'https://shielded-shelf-27362.herokuapp.com/api/products'
        axios.get(url).then(res=>{
            setProducts(res.data)
        })
    },[])
    return (
        <PageLayout>
            <div className="homePageSections">
                <Slider></Slider>
                <div className="productSectionContainer" style={{padding: '80px 0px'}}>
                    <div className="sectionTitle text-center" style={{padding: '20px 0px'}}>
                        <h1>Our Product</h1>
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
                <Reviews></Reviews>
                <Subscribe></Subscribe>
            </div>
        </PageLayout>
    );
};

export default Home;