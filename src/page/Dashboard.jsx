
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import AdminContent from '../component/AdminComponent/AdminContent';
import Sidebar from '../component/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Container fluid style={{ marginLeft: '0px', paddingLeft: '0px' }}>
                <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                    <Sidebar />

                    <Container>
                        <Navbar style={{ background: 'gray', width: '100%', height: '8%' }}>
                            <Container>
                                <Navbar.Brand style={{ color: 'white' }}>Dashboard</Navbar.Brand>
                                <Nav className="me-auto">
                                </Nav>
                            </Container>
                        </Navbar>
                        <AdminContent />
                    </Container>
                </div>

            </Container>
        </>
    )
}

export default Dashboard
