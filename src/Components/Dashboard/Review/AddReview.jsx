import React from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {RiEditBoxLine, RiImageLine, RiStarFill} from "react-icons/ri";
import {useForm} from "react-hook-form";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import useAuth from "../../../Hooks/useAuth";
const AddReview = () => {
    const {user}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const {newReview} = useNotification()
    const onSubmit = data => {
        const url = "https://shielded-shelf-27362.herokuapp.com/api/review/add"
        axios.post(url, data).then(res=>{
            const result = res.data
            if(result.insertedId){
                reset()
                newReview()
            }
        })
    };
    return (
        <>
            <Col md={6} sm={6}>
                <div className="addDonationSections">
                    <h1 className="sectionTitle">Add Your Rating</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6} className="mb-2">
                                <Form.Label>Customer Name <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiEditBoxLine/></InputGroup.Text>
                                    <FormControl defaultValue={user.displayName} required {...register("name")} type="text"/>
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Photo URL <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiImageLine/></InputGroup.Text>
                                    <FormControl required {...register("photo")} type="url" placeholder="Photo URL" />
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Rating <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text><RiStarFill/></InputGroup.Text>
                                    <select {...register("rating")} className='form-control'>
                                        <option value="1">Rating 1</option>
                                        <option value="2">Rating 2</option>
                                        <option value="3">Rating 3</option>
                                        <option value="4">Rating 4</option>
                                        <option value="5">Rating 5</option>
                                    </select>
                                </InputGroup>
                            </Col>
                            <Col md={6} className="mb-2">
                                <Form.Label>Comments <span className="formRequired">*</span></Form.Label>
                                <InputGroup className="mb-2">
                                    <textarea {...register("desc")} className="form-control" defaultValue='Type something Here' />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Add Rating</Button>
                    </Form>
                </div>
            </Col>
            <Col md={3} sm={3}>
                <h1>Update User</h1>
            </Col>
        </>
    );
};

export default AddReview;