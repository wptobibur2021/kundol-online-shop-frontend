import './Product.css'
import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import {Row, Col, Form,InputGroup, FormControl, Button  } from 'react-bootstrap'
import { RiEditBoxLine, RiExchangeDollarLine, RiUser3Line,RiImageLine} from "react-icons/ri";
import useNotification from "../../../Hooks/useNotification";
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const {newProduct} = useNotification()
    const onSubmit = data => {
        const url = "https://shielded-shelf-27362.herokuapp.com/api/product/add"
        axios.post(url, data).then(res=>{
            const result = res.data
            if(result.insertedId){
                reset()
                newProduct()
            }
        })
    };
    return (
        <>
            <Col md={6} sm={6}>
                <div className="addDonationSections">
                    <h1 className="sectionTitle">Add Product</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6} className="mb-2">
                                <Form.Label>Product Name <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiEditBoxLine/></InputGroup.Text>
                                    <FormControl required {...register("name")} type="text" placeholder="Product Name" />
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Brand Name <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiEditBoxLine/></InputGroup.Text>
                                    <FormControl required {...register("brand")} type="text" placeholder="Brand Name" />
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Photo URL <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiImageLine/></InputGroup.Text>
                                    <FormControl required {...register("photo")} type="text" placeholder="Photo URL" />
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Price <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiExchangeDollarLine/></InputGroup.Text>
                                    <FormControl required {...register("price")} type="number" placeholder="Price"/>
                                </InputGroup>
                            </Col>
                            <Col md={12} className="mb-2">
                                <Form.Label>Description <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <textarea {...register("desc")} className="form-control" defaultValue='Type something Here' />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Add Product</Button>
                    </Form>
                </div>
            </Col>
            <Col md={3} sm={3}>
                <h1>Update User</h1>
            </Col>
        </>
    );
};

export default AddProduct;