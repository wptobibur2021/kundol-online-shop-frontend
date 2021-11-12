import './Footer.css'
import {Container, Row, Col} from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt,FaEnvelope,FaArrowRight } from 'react-icons/fa';
import payment from '../../../Images/payment.png'
const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footerWidgets">
                            <h3 className="footerTittle">About Us</h3>
                            <p>Be the first to learn about our latest trends and get exclusive offers.</p>
                            <ul className="footerMenu">
                                <li className="footerMenuList"><FaMapMarkerAlt className="footerIcon"/>4710-4890 Breckinridge St, UK Burlington, VT 05401</li>
                                <li className="footerMenuList"><FaPhoneAlt className="footerIcon"/>1-800-345-6789</li>
                                <li className="footerMenuList"><FaEnvelope className="footerIcon"/>info@kundol.com</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footerWidgets">
                            <h3 className="footerTittle">Information</h3>
                            <ul className="footerMenu">
                                <li className="footerMenuList"><FaArrowRight className="footerIcon"/>About Us</li>
                                <li className="footerMenuList"><FaArrowRight className="footerIcon"/>Privacy Policy</li>
                                <li className="footerMenuList"><FaArrowRight className="footerIcon"/>Delivery Information</li>
                                <li className="footerMenuList"><FaArrowRight className="footerIcon"/>Site Map</li>
                                <li className="footerMenuList"><FaArrowRight className="footerIcon"/>Contact Us</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footerWidgets">
                            <h3 className="footerTittle">We are support</h3>
                            <img src={payment} alt="payment"/>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footerWidgets">
                            <h3 className="footerTittle">Find Us </h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45552.500460783405!2d-73.24977326128442!3d44.47353159990189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7a5bbde60cf1%3A0x2df5d83e5a01e9b2!2sUniversity%20of%20Vermont!5e0!3m2!1sen!2sbd!4v1636644475550!5m2!1sen!2sbd"
                                style={{width: '600', height:"450", }} allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;