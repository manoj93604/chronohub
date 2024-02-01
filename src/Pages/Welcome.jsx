import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import '../Assets/css/Welcome.css'
import ChronoTask from '../Assets/images/ChronoTask.png';
import ChronoTrack from '../Assets/images/ChronoTrack.png';
import ChronoConnect from '../Assets/images/ChronoConnect.png';

const Welcome = () => {

  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='intro_content_left'>
            <h1>Welcome to ChronoHub</h1>
            <p>
            At ChronoHub, we're all about making time work for you. In today's fast-paced world, time is of the essence, and managing it efficiently is the key to success. That's where we come in.
            </p>
            <InputGroup className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" style={{ border: "solid 2px #ff725d" }}/>
              <Button style={{ backgroundColor: "#f1482f", border: 0 }} id="button-addon2" onClick={navigateSignup}>
                Sign Up for Free
              </Button>
            </InputGroup>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div style={{ marginTop: '5%' }}>
            <Carousel className='CardImage'>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?w=740&t=st=1698907004~exp=1698907604~hmac=640eddb02b9047949504f26cd0d3b76eb854dac5e7e004b8dfebe255e9abc778" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/completed-steps-concept-illustration_114360-5521.jpg?size=626&ext=jpg&uid=R116317829" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/team-checklist-concept-illustration_114360-9880.jpg?w=740&t=st=1698904060~exp=1698904660~hmac=9b01140a694872f7ca6b0f650dea56ea3ba5474d93db7c0ee2a89fa285c58191" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/profiling-concept-illustration_114360-5854.jpg?w=740&t=st=1698908598~exp=1698909198~hmac=93fa8934e19a8a8b6b90e9e3468e579ae31b3c0cb846349583bc24f4baa742cd" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/progress-overview-concept-illustration_114360-5262.jpg?w=740&t=st=1698908448~exp=1698909048~hmac=5a6b647ad08d104dbdf16bd76436ec6386b61dd58e38ee15ab191e50fb658ec5" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/mobile-inbox-concept-illustration_114360-4408.jpg?w=740&t=st=1698908566~exp=1698909166~hmac=efe49885b3c8c74d40f2d0440c2814fdf1e39a91c8a347d424f4048e958cd4b8" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top"  src="https://img.freepik.com/free-vector/date-picker-concept-illustration_114360-4495.jpg?w=740&t=st=1698904003~exp=1698904603~hmac=6191388cb0be552b498efc938b1ed7c269f711f2a2328a1a2123adc85d236daa" />
                </Card>
              </Carousel.Item>

              <Carousel.Item interval={1000} in={ true }>
                <Card className='CardImage'>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/option-concept-illustration_114360-5792.jpg?w=740&t=st=1698907007~exp=1698907607~hmac=a4e8db33cf989fdb0fd16db8343c9df7f3ab28f7a50b6a4b5ec6c14ae236dab9" />
                </Card>
              </Carousel.Item>

            </Carousel>
          </div>
        </Col>
      </Row>
      
      <Row >
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
              <h1>What is ChronoHub?</h1>
              <p>
              ChronoHub is your go-to platform for everything time-related. We provide a suite of tools and resources designed to help you streamline your daily tasks, improve productivity, and make the most of every moment.
              </p>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6000.jpg?w=740&t=st=1698910356~exp=1698910956~hmac=9a06c8d597c9b621f2b1364a9d46660ceb918b1dea71738e5a271ae922cdaa9e" />
            </Card>
          </div>
        </Col>
      </Row>

      <Row style={{marginTop: '5%'}}>
        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card  style={{ width: '18rem' }}>
            <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoTask}/>
              <Card.Body>
                <Card.Title>ChronoTask</Card.Title>
                <Card.Text>
                The tool for efficient and time-bound task management. Stay organized, prioritize tasks, and track progress. Maximize productivity and never let tasks slip. Manage with precision.
                </Card.Text>
                {/* <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoTask</Button>
                </div> */}
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card style={{ width: '18rem'}}>
              <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoTrack} />
              <Card.Body>
                <Card.Title>ChronoTrack</Card.Title>
                <Card.Text>
                Simplifies employee hour tracking, provides real-time insights into working hours. Ensure productivity, monitor attendance, and streamline payroll. Empower with precise tracking.
                </Card.Text>
                {/* <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoTrack</Button>
                </div> */}
              </Card.Body>
          </Card>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoConnect} />
              <Card.Body>
                <Card.Title>ChronoConnect</Card.Title>
                <Card.Text>
                Revolutionizes internal communication. Enhance collaboration with real-time chat, file sharing, and discussions. Streamline teamwork and stay connected.
                </Card.Text>
                {/* <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoConnect</Button>
                </div> */}
              </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{marginTop: '5%'}}>
        <Col xs="auto">
          <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Learn More</Button>
        </Col>
      </Row>

      <Row >
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/hot-air-balloon-concept-illustration_114360-11889.jpg?w=740&t=st=1698925859~exp=1698926459~hmac=5c5773315e2c0f43af6010f68727e1e7d08b35c70f25e7c0b09cfc6afd173af4" />
            </Card>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
              <h1>Key Features</h1>
              <div>
              <Accordion alwaysOpen defaultActiveKey="0" allowMultiple>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Task Tracking</Accordion.Header>
                  <Accordion.Body>
                  Keep a close eye on your daily tasks and projects, ensuring nothing falls through the cracks.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Time Management</Accordion.Header>
                  <Accordion.Body>
                  Discover time-saving strategies and techniques to boost your productivity.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Work-Life Balance</Accordion.Header>
                  <Accordion.Body>
                  Learn how to optimize your time for a more fulfilling life.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Employee Tracking</Accordion.Header>
                  <Accordion.Body>
                  Monitor and optimize work progress and employee performance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Chat Platform</Accordion.Header>
                  <Accordion.Body>
                  Collaborate effectively with your team in real-time.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
          </div>
        </Col>
      </Row>

      <Row >
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
              <h1>Why Choose ChronoHub?</h1>
              <h5>User-Friendly</h5>
              <p>
              Our platform is designed to be intuitive and user-friendly, making it easy for anyone to get started.
              </p>
              <h5>Customizable</h5>
              <p>
              Tailor our tools to fit your unique needs and preferences.
              </p>
              <h5>Expert Resources</h5>
              <p>
              Access a wealth of tips, guides, and best practices for time management.
              </p>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/landing-page-concept-illustration_114360-4211.jpg?w=740&t=st=1698927730~exp=1698928330~hmac=b5db0e9e140941ce3e771ac7b51678747134326925dc2bfd88795316cb76c9aa" />
            </Card>
          </div>
        </Col>
      </Row>


      <Row className="justify-content-center" style={{marginTop: '5%'}}>
        <Col xs="auto">
          <h1>Our Products</h1>
        </Col>
      </Row>

      <Row style={{marginTop: '5%'}}>
        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card  style={{ width: '18rem' }}>
            <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoTask}/>
              <Card.Body>
                <Card.Title>ChronoTask</Card.Title>
                <Card.Text>
                The tool for efficient and time-bound task management. Stay organized, prioritize tasks, and track progress. Maximize productivity and never let tasks slip. Manage with precision.
                </Card.Text>
                <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoTask</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card style={{ width: '18rem'}}>
              <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoTrack} />
              <Card.Body>
                <Card.Title>ChronoTrack</Card.Title>
                <Card.Text>
                Simplifies employee hour tracking, provides real-time insights into working hours. Ensure productivity, monitor attendance, and streamline payroll. Empower with precise tracking.
                </Card.Text>
                <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoTrack</Button>
                </div>
              </Card.Body>
          </Card>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
        <div className='SessionOn_left mt-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '50px', height: '50px',marginTop: '15px', marginLeft: '15px' }} variant="top" src={ChronoConnect} />
              <Card.Body>
                <Card.Title>ChronoConnect</Card.Title>
                <Card.Text>
                Revolutionizes internal communication. Enhance collaboration with real-time chat, file sharing, and discussions. Streamline teamwork and stay connected.
                </Card.Text>
                <div className="text-center">
                <Button style={{ backgroundColor: "#f1482f", border: 0 }}>Get ChronoConnect</Button>
                </div>
              </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>


      <Row >
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src="https://img.freepik.com/free-vector/new-job-concept-illustration_114360-20560.jpg?w=740&t=st=1698928366~exp=1698928966~hmac=77fb0f84d5d1620feb7f96360a95f9aca279231e4032a24567142847305518cf" />
            </Card>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className='SessionOne_left'>
              <h1>Get Started</h1>
              <p>
              Ready to take control of your time and productivity? Join ChronoHub today and start making the most of every minute.
              </p>
              <InputGroup className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" style={{ border: "solid 2px #ff725d" }}/>
                <Button style={{ backgroundColor: "#f1482f", border: 0 }} id="button-addon2" onClick={navigateSignup}>
                  Sign Up for Free
                </Button>
              </InputGroup>
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Welcome;