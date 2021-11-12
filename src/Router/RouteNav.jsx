import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Registration from "../Page/Registration/Registration";
import Dashboard from "../Components/Dashboard/Dashboard";
import Details from "../Components/Frontend/Products/Details";
import Shop from "../Page/Shop/Shop";

const RouteNav = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <PrivateRoute exact path="/appointment">

                </PrivateRoute>
                <Route exact path='/login'>
                   <Login></Login>
                </Route>
                <Route exact path='/registration'>
                    <Registration></Registration>
                </Route>
                <Route exact path='/shop'>
                    <Shop></Shop>
                </Route>

                {/* Dashboard */}
                <PrivateRoute path='/dashboard'>
                    <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path='/product/details/:id'>
                    <Details></Details>
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default RouteNav;