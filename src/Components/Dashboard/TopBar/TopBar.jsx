import './TopBar.css'
import { Container, Col, Row,Button} from 'react-bootstrap'
import useAuth from "../../../Hooks/useAuth";
import {useHistory} from "react-router-dom";
import useNotification from "../../../Hooks/useNotification";
export default function TopBar() {
   const {user,logOut} = useAuth()
    const history = useHistory()
    const {userLogout} = useNotification()
    return (
        <header className="headerSection mb-3">
            <Container fluid>
                <Row>
                    <Col md={3} className="text-center">
                        <h1>Dashboard</h1>
                    </Col>
                    <Col md={{ span:4, offset: 5 }} className="text-right userInfo">
                        <span className="userName">{user.displayName}</span>
                        <img className="profileImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Dashboard"/>
                        <Button onClick={()=>logOut(history, userLogout)} variant="danger">Logout</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
