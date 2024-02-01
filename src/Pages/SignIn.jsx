import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "../Assets/css/SignIn.css"
import Overlay from "../Components/Overlay";

function SignIn() {

  const [isShowOverlay, setIsShowOverlay] = useState(false);

  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    setIsShowOverlay(true);
  };  


  return (
    <>
    <Container fluid style={{marginTop: '8%'}}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={11} md={6} lg={4} style={{padding: '30px'}} className="custom-shadow center_session">
            <div className="d-flex align-items-center justify-content-center" style={{marginTop: '-20%'}}>
                 <Image style={{backgroundColor: "#385a64" ,width: '90px', height: '90px', padding: '10px'}} src="https://cdn-icons-png.flaticon.com/128/6474/6474487.png?ga=GA1.1.252936203.1681415593&track=ais" roundedCircle />
            </div>
          <Form>
            <h4 className="mb-4 mt-4">Unlock the Power of ChronoHub with Sign-In</h4>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
             <Form.Label htmlFor="inputPassword5">Email or Username</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlText">
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
               <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form>
          <div className='d-flex justify-content-between align-items-center mb-3' style={{fontSize: '12px'}}>
            <Form.Check
              type='checkbox'
              label="Stay signed in"
            /><a href='www.google.com'>Forgot Password?</a>
          </div>
          <div className="d-grid gap-2">
            <Button style={{ backgroundColor: "#f1482f", border: 0 }} onClick={handleSignIn}>
              Sign In
            </Button>
            <Button variant="secondary" onClick={navigateSignUp}>
              Create ChronoHub Account
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    {isShowOverlay && <Overlay/>}
    </>
  );
}

export default SignIn;