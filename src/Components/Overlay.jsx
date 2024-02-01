import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "../Assets/css/Overlay.css";
import { useNavigate } from "react-router-dom";

const Overlay = () => {

    const navigate = useNavigate();


    const navigateToHome = () =>{
        navigate("chronohub/");
    }

  return (
    <div className="overlay">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?w=740&t=st=1699102538~exp=1699103138~hmac=b9f15eb53d74b16175870b58ae3bc2b7b8881fcf6c4a1c29e333ffcac9fd374c" />
        <Card.Body>
          <Card.Title style={{fontSize: '14px'}}>Join the ChronoHub Evolution</Card.Title>
          <Card.Text style={{fontSize: '12px'}}>
          We're actively enhancing ChronoHub to offer you the best possible experience. Stay tuned for exciting updates and new features as we continue to evolve our platform. Please leave your suggestions below to become one of the contributors to our development.
          </Card.Text>
          <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{fontSize: '12px'}} className='mb-3'>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <div className="mt-4 d-grid">
            <Button style={{ backgroundColor: "#f1482f", border: 0 }} onClick={navigateToHome}>Submit</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Overlay;
