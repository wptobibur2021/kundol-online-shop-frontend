import React, {useState} from 'react';
import {Button, Col, Spinner, Table} from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";

const AllProducts = () => {
    const {productRemove} = useNotification()
    const {isLoading} = useAuth()
    const [products, setProducts] = useState([])
    const url = `https://shielded-shelf-27362.herokuapp.com/api/products`
    axios.get(url).then(res=>{
        console.log('My Orders:', res.data)
        setProducts(res.data)
    })
    const removeProduct = id =>{
        const confirm = window.confirm('Are you sure remove order?')
        const url = `https://shielded-shelf-27362.herokuapp.com/api/product/remove/${id}`;
        if(confirm){
            axios.delete(url).then(res=>{
                const result = res.data
                if(result.deletedCount > 0){
                    productRemove()
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
                        <th>Brand</th>
                        <th>photo</th>
                        <th>price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.map((P) => (
                            <tr key={P._id}>
                                <td>{P.name}</td>
                                <td>{P.brand}</td>
                                <td><img style={{width: '50px', height: '50px', objectFit: 'cover'}} src={P.photo}
                                         alt={P.productName}/></td>
                                <td>{P.price}</td>
                                <td>
                                    <Button variant="danger" onClick={()=>removeProduct(P._id)}><FaTrash className="orderIcon"/></Button>
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

export default AllProducts;