import './Login.css'
import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaLock, FaEnvelope, FaFacebookF, FaGoogle } from "react-icons/fa";
import useAuth from  '../../Hooks/useAuth'
import {NavLink, useLocation, useHistory} from "react-router-dom";
import useNotification from "../../Hooks/useNotification";
const Login = () => {
    const {passWordError,userLogin} = useNotification();
    // eslint-disable-next-line no-undef
    const [loginData, setLoginData] = useState({})
    const {loginUser, isLoading} = useAuth();
    const history = useHistory()
    const location = useLocation()
    const handleOnChange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const loginSubmitHandle = e =>{
        e.preventDefault()
        const email = loginData.email
        const password = loginData.password
        loginUser(email, password, location, history, userLogin)
    }
    return (
        <div className="loginPageSection" style={{
            backgroundImage: `url('https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="loginPage">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="loginFrom">
                                <Form onSubmit={loginSubmitHandle}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address <span className="requiredColor">*</span></Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text><FaEnvelope/></InputGroup.Text>
                                            <FormControl name="email" type="email" onBlur={handleOnChange} placeholder="Email" />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password <span className="requiredColor">*</span></Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text><FaLock/></InputGroup.Text>
                                            <FormControl name="password" type="password" onBlur={handleOnChange} placeholder="Password" />
                                        </InputGroup>
                                    </Form.Group>
                                    <Button variant="primary" className="mb-3" type="submit">
                                        Login
                                    </Button>
                                </Form>
                                <NavLink to='/registration'>Do You have an account?</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;