import React from "react";
import './Navigation.css';
import {Navbar, Container, NavDropdown,Nav,Button} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useNotification from "../../../Hooks/useNotification";


const Navigation = () => {
    const {user, logOut} = useAuth()
    const history = useHistory()
    const {userLogout} = useNotification()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Kundol Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px', margin: 'auto !important' }}
                        navbarScroll
                    >
                        <NavLink to='/' className="nav-link">Home</NavLink>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to='/shop' className="nav-link">Shop</NavLink>
                        {
                            user?.email ? <div style={{display: 'flex'}}>
                                <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
                                    <Button variant="danger" onClick={()=>logOut(history,userLogout)}>Logout</Button>
                            </div>
                                :
                                <div style={{display: 'flex'}}>
                                    <NavLink to='/login' className="nav-link">Login</NavLink>
                                    <NavLink to='/registration' className="nav-link">Registration</NavLink>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;