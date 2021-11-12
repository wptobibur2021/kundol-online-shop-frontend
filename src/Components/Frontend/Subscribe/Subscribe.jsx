import './Subscribe.css';
import {Container, InputGroup, Row, Col, Form, Button} from "react-bootstrap";

const Subscribe = () => {
    return (
        <div className="SubscribeSections" style={{padding: '80px 0px'}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>Subscribe newsletter to get updated</h3>
                        <p>We’ll never share your email address with a third-party.</p>
                    </Col>
                    <Col md={6}>
                        <form>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Email"
                                    aria-describedby="inputGroupPrepend"
                                    name="email"

                                />
                            </InputGroup>
                            <Button variant="primary" className="mt-2">Subscribe Now</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscribe;