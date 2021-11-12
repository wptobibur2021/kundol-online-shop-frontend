import React from 'react';
import { useForm } from "react-hook-form";
import {Form,InputGroup, Button} from "react-bootstrap";
import {FaUser,FaMapMarker,FaPhoneAlt,FaLongArrowAltRight} from "react-icons/fa";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import {useHistory} from 'react-router-dom'
import useNotification from "../../../Hooks/useNotification";
const Order = ({order}) => {
    const {user} = useAuth()
    const history = useHistory()
    const {orderSuccess} = useNotification()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data.productId = order._id
        data.productName = order.name
        data.userEmail = user.email
        data.price = order.price
        data.userId = user.uid
        data.photo = order.photo
        data.status = 0
        const url = "https://shielded-shelf-27362.herokuapp.com/api/product/orders"
        axios.post(url, data).then(res =>{
            const result = res.data
            if(result.insertedId){
                history.push('/')
                orderSuccess()
                reset()
            }
        })
    };
    return (
        <div className="productOrder">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaUser/></InputGroup.Text>
                        <input type="text" defaultValue={user.displayName} required placeholder="customerName" {...register("customerName", {required: true, minLengthr: 5 })} className="form-control" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Address <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaMapMarker/></InputGroup.Text>
                        <input type="text" required placeholder="Full Address" {...register("address", {required: true, minLengthr: 5 })} className="form-control" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile Number <span className="requiredColor">*</span></Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FaPhoneAlt/></InputGroup.Text>
                        <input type="number" required placeholder="Mobile No" {...register("mobileNo", {required: true, minLengthr: 2 })} className="form-control" />
                    </InputGroup>
                </Form.Group>
                <Button type="submit">Order Now <FaLongArrowAltRight/></Button>
            </form>
        </div>
    );
};

export default Order;