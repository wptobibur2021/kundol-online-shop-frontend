import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import TopBar from "./TopBar/TopBar";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import AddProduct from "./Product/AddProduct";
import AddReview from "./Review/AddReview";
import MyOrders from "./Orders/MyOrders";
import OurOrders from "./Orders/OurOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
export default function Dashboard() {
    let { path, url } = useRouteMatch();
    return (
        <div className="mainContainer">
            <TopBar></TopBar>
            <div className="dashboardContainer">
                <div className="dashboardBoy">
                    <Container fluid>
                        <Row>
                            <LeftSidebar url={url}></LeftSidebar>
                            <Switch>
                                <Route exact path={path}>
                                    <Col md={9}>
                                        <h1>Welcome to our Dashboard</h1>
                                    </Col>
                                </Route>
                                <Route path={`${path}/add-review`}>
                                   <AddReview></AddReview>
                                </Route>
                                <Route path={`${path}/add-product`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route path={`${path}/my-orders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/our-orders`}>
                                    <OurOrders></OurOrders>
                                </Route>
                                <Route path={`${path}/make-admin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                            </Switch>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
