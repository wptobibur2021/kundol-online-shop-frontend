import React from 'react';
import useAuth from "../Hooks/useAuth";
import { Route,Redirect,useLocation } from "react-router-dom";
import {CircularProgress,Box} from "@mui/material";

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading, admin} = useAuth()
    if(isLoading){
        return (
            <Box  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py: 40}}>
                <CircularProgress/>
            </Box>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email &&  admin? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;