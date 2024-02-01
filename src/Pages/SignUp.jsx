import {React, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Assets/css/SignUp.css"
import Overlay from "../Components/Overlay";

const SignUp = () => {

  const [isShowOverlay, setIsShowOverlay] = useState(false);

  const handleSignUp = () =>{
    setIsShowOverlay(true);
  }

  return (
    <>
    <Container
      style={{ marginTop: "3%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col className="custom-shadow-left left_session d-none d-lg-block" lg={4} style={{ padding: '32px' }}>
          <div className="d-flex align-items-center">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/6474/6474487.png?ga=GA1.1.252936203.1681415593&track=ais"
              width="60px"
              height="60px"
              className="d-inline-block align-top"
            />
            <h3>ChronoHub</h3>
          </div>
          <h4 style={{ marginTop: "30px", fontSize: '18px' }}>Why Sign Up?</h4>
          <ul className="mt-4" style={{ fontSize: '14px' }}>
            <li>Personalize your experience and save preferences.</li>
            <li>Effortlessly streamline your platform interactions.</li>
            <li>Track your activity and engagement.</li>
            <li>Register for free.</li>
          </ul>
          <div className="d-flex align-items-center justify-content-center">
            <Card style={{ width: "15rem", border: "0" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/dog-paw-concept-illustration_114360-8528.jpg?w=826&t=st=1698943820~exp=1698944420~hmac=c2b6d7730f7c400b8c60386d536abb1509dae28eee657de13b728559c2cdb610"
              />
            </Card>
          </div>
        </Col>

        <Col className="custom-shadow-right right_session" xs={11} lg={4} style={{ padding: '32px' }}>
          <div className="d-flex align-items-center" style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: '18px' }}>Create ChronoHub Account</h2>
          </div>
          <Form.Label htmlFor="inputPassword5">Email</Form.Label>
          <Form.Control
            type="email"
            id="inputPassword5"
            style={{ marginBottom: "16px" }}
            size="sm"
          />
          <Form.Label htmlFor="inputPassword5">Username</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            style={{ marginBottom: "16px" }}
            size="sm"
          />
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="Password"
            id="inputPassword5"
            style={{ marginBottom: "16px" }}
            size="sm"
          />
            <Form.Check
              inline
              label="Sign up to get product updates, news, and other marketing communications."
              name="group1"
              type="checkbox"
              className="mt-2"
              style={{ fontSize: '12px' }}
            />
            <Form.Check
              inline
              label="Stay signed in for 30 days"
              name="group1"
              type="checkbox"
              className="mt-2"
              style={{ fontSize: '12px' }}
            />
            <p className="mt-2" style={{ fontSize: '12px' }}>
              By creating an account, I agree to the Terms and Privacy Policy.
            </p>

          <div className="mt-4 d-grid">
            <Button style={{ backgroundColor: "#f1482f", border: 0 }} onClick={handleSignUp}>Create Free Account</Button>
          </div>
        </Col>
      </Row>
    </Container>
    {isShowOverlay && <Overlay/>}
    </>
  );
}

export default SignUp;