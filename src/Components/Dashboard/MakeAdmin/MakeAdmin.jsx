import React, {useState} from 'react';
import {Col, Table, Button} from 'react-bootstrap'
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import {useHistory} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
    const {token} = useAuth()
    const [users, setUsers] = useState([])
    const {userMakeAdmin} = useNotification()
    const history = useHistory()
    const url = 'https://shielded-shelf-27362.herokuapp.com/api/all-users'
    axios.get(url).then(res=>{
        setUsers(res.data)
    })
    const makeAdminHandle = id =>{
        const url = `https://shielded-shelf-27362.herokuapp.com/api/make-admin-user/${id}`
        axios.put(url,'',{ headers: {"authorization" : `Bearer ${token}`} }).then(res=>{
            const result = res.data
            if(result.modifiedCount > 0){
                userMakeAdmin()
                history.push('/dashboard')
            }

        })
    }


    return (
        <Col md={9} className="addDonationSections">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    users?.map((u)=>(
                        <tr key={u._id}>
                            <td>{u?.fullName}</td>
                            <td>{u?.email}</td>
                            <td>{u?.role === 0 ? <p>Customer</p> : <p>Admin</p> }</td>
                            <td><Button variant="primary" onClick={()=>makeAdminHandle(u._id)}>Make An Admin</Button></td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        </Col>
    );
};

export default MakeAdmin;