import './LeftSidebar.css'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import React from "react";
import useAuth from "../../../Hooks/useAuth";

export default function LeftSidebar({url}) {
    const {admin} = useAuth()
    return ( 
        <Col sm={3} md={3}>
            <div className="leftSidebarMeu">
                <ul className="leftMenu">
                    {
                        admin? <div>
                            <li className="leftMenuItem"><NavLink to={`${url}/add-product`}>Add Product</NavLink></li>
                            <li className="leftMenuItem"><NavLink to={`${url}/our-orders`}>Our Orders</NavLink></li>
                            <li className="leftMenuItem"><NavLink to={`${url}/make-admin`}>Make An Admin</NavLink></li>
                                <li className="leftMenuItem"><NavLink to={`${url}/manage-products`}>Manage Products</NavLink></li>
                        </div>
                            :
                            <div>
                                <li className="leftMenuItem"><NavLink to={`${url}/add-review`}>Add Review</NavLink></li>
                                <li className="leftMenuItem"><NavLink to={`${url}/my-orders`}>My Orders</NavLink></li>
                                <li className="leftMenuItem"><NavLink to={`${url}/pay`}>Pay</NavLink></li>
                            </div>
                    }
                </ul>
            </div>
        </Col>
    )
}
