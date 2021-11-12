import React, {useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaLock, FaEnvelope, FaUser} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useNotification from "../../Hooks/useNotification";
const Registration = () => {
    const {newUserCreate, isLoading, user} = useAuth();
    const {passWordError,userCreate} = useNotification();
    const history = useHistory()
    const [registrationData, setRegistrationData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name
        const value = e.target.value
        const newRegistrationData = {...registrationData}
        newRegistrationData[field] = value
        setRegistrationData(newRegistrationData)
    }
    const registrationSubmitHandle = e =>{
        e.preventDefault()
        const email = registrationData.email
        const password = registrationData.password
        const fullName = registrationData.fullName

        newUserCreate(email, password, fullName, userCreate, history)
    }
    return (
        <div className="loginPageSection" style={{
            backgroundImage: `url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="loginPage">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="loginFrom">
                                <Form onSubmit={registrationSubmitHandle}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name <span className="requiredColor">*</span></Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text><FaUser/></InputGroup.Text>
                                            <FormControl name="fullName" onBlur={handleOnChange} type="text" placeholder="Full Name" />
                                        </InputGroup>
                                    </Form.Group>
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
                                            <FormControl name="password" type='password' placeholder="Password" onBlur={handleOnChange}/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button variant="primary" className="mb-3" type="submit">
                                        Registration
                                    </Button>
                                </Form>
                                <NavLink to='/login'>Have a all ready account?</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Registration;