import React, {useState} from 'react';
import {Button, Col, Spinner, Table} from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import {useHistory} from  'react-router-dom'
const OurOrders = () => {
    const history = useHistory()
    const {isLoading} = useAuth()
    const {statusUpdate} = useNotification()
    const [orders, setOrders] = useState([])
    const url = 'https://shielded-shelf-27362.herokuapp.com/api/all-orders'
    axios.get(url).then(res=>{
        setOrders(res.data)
    })
    const shippedOrder = id =>{
        const confirm = window.confirm('Are you sure change status?')
        const url = `https://shielded-shelf-27362.herokuapp.com/api/order/status/${id}`;
        if(confirm){
            axios.put(url).then(res=>{
                const result = res.data
                if(result.modifiedCount > 0){
                    history.push('/dashboard')
                    statusUpdate()
                }
            })
        }
    }
    return (
        <Col md={9}>
            {!isLoading && <div className="addDonationSections">
                <Table striped bordered hover size="sm" style={{padding: '50px'}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Photo</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders?.map((o) => (
                            <tr key={o._id}>
                                <td>{o.productName}</td>
                                <td>{o.customerName}</td>
                                <td>{o.address}</td>
                                <td>{o.mobileNo}</td>
                                <td><img style={{width: '50px', height: '50px', objectFit: 'cover'}} src={o.photo}
                                         alt={o.productName}/></td>
                                <td>{o.price}</td>
                                <td>
                                    {
                                        o?.status === 0 ? <p>Pending</p> : <p>Shipped </p>
                                    }
                                </td>
                                <td>
                                    <Button variant="danger" onClick={()=>shippedOrder(o._id)}><FaTrash className="orderIcon"/></Button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </Table>
            </div>}
            {
                isLoading && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner animation="border" variant="primary" /></div>
            }
        </Col>
    );
};

export default OurOrders;