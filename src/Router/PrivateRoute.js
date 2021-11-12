import React from 'react';
import useAuth from "../Hooks/useAuth";
import { Route,Redirect,useLocation } from "react-router-dom";
import {Spinner} from "react-bootstrap";

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth()
    if(isLoading){
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '300px 0px'}}><Spinner animation="border" variant="primary" /></div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;