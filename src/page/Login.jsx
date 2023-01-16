import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from "@material-ui/core/Input";

const Login = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const [revealed, setRevealed] = useState(false);

    const handleReveal = () => {
        setRevealed(true)
    }

    return (
        <Container>
            <Row>
                <Col sm={8}>ini logo</Col>
                <Col sm={4} style={{
                    paddingTop: '25%',
                    paddingBottom: '25%'
                }}>

                    <Card style={{
                        width: '30rem',
                        padding: '15px',
                        paddingRight: '15px',
                        paddingLeft: '15px',
                    }}>
                        <p style={{ fontSize: 30, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}><PersonIcon /></p>
                        <p style={{ fontSize: 27, fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>Login</p>
                        <p style={{ fontSize: 17, fontWeight: 300, alignItems: 'center', justifyContent: 'center' }}>Enter your email and password below</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={(revealed) ? "text" : "password"} placeholder="Password" />
                                <i onClick={handleReveal}>Show Password</i>
                            </Form.Group> */}
                            <Form.Label>Password</Form.Label>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control
                                    type={values.showPassword ? "text" : "password"}
                                    style={{width: '100%' , border: '1px solid gray'}}
                                    onChange={handlePasswordChange("password")}
                                    value={values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Button variant="primary" style={{ width: '100%' }} type="submit">
                                    Login
                                </Button>
                            </Form.Group>
                            <Form.Text>
                                Don't have account? <Button variant="link">Sign up</Button>
                            </Form.Text>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login