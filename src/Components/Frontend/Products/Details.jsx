import React, {useState} from 'react';
import PageLayout from "../PageLayout/PageLayout";
import {Container, Row, Col} from "react-bootstrap";
import Order from "./Order";
import {  useParams } from 'react-router';
import axios from "axios";
const Details = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({})
    const url = `https://shielded-shelf-27362.herokuapp.com/api/details/products/${id}`
    axios.get(url).then(res=>{
        setDetail(res.data)
    })
    return (
       <PageLayout>
           <div className="detailsPageSections" style={{padding: '80px 0px'}}>
               <Container>
                   <Row>
                       <Col md={6}>
                           <div className="orderDetails">
                               <h3>Product Overview</h3>
                               <h4>{detail?.name}</h4>
                               <h6>Price: ${detail?.price} </h6>
                               <img style={{width: '650px', objectFit: 'cover', margin: '30px 0px'}} src={detail?.photo} alt={detail?.name}/>
                                <p>{detail?.desc}</p>
                           </div>
                       </Col>
                       <Col md={{span: 4, offset: 2}}>
                           <Order order={detail}></Order>
                       </Col>
                   </Row>
               </Container>
           </div>
       </PageLayout>
    );
};

export default Details;