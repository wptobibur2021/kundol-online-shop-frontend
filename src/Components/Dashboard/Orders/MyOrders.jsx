import React, {useState} from 'react';
import {Col, Spinner, Table, Button} from "react-bootstrap";
import {FaTrash, FaEye} from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
const MyOrders = () => {
    const {orderRemove} = useNotification()
    const {user, isLoading} = useAuth()
    const [myOrders, setOrders] = useState([])
    const url = `https://shielded-shelf-27362.herokuapp.com/api/user/orders/${user.email}`
    axios.get(url).then(res=>{
        console.log('My Orders:', res.data)
        setOrders(res.data)
    })
    const removeOrder = id =>{
        const confirm = window.confirm('Are you sure remove order?')
        const url = `https://shielded-shelf-27362.herokuapp.com/api/order/remove/${id}`;
        if(confirm){
            axios.delete(url).then(res=>{
                const result = res.data
                if(result.deletedCount > 0){
                    orderRemove()
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
                          myOrders?.map((o) => (
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
                                          o?.status === 0 ? <p>Pending</p> : <p>Shipped</p>
                                      }
                                  </td>
                                  <td>
                                      <Button variant="danger" onClick={()=>removeOrder(o._id)}><FaTrash className="orderIcon"/></Button>
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

export default MyOrders;