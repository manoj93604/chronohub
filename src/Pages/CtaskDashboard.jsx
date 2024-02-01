import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../Assets/css/Welcome.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Image } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';

import ProfilePhoto from "../Assets/images/profile.jpg";


const CtashDashboard = () => {

  const [key, setKey] = useState('Worked on');

  return (
    <Container fluid>
      {/* session one */}

      <Row
        style={{ paddingLeft: "35px", paddingRight: "35px", marginTop: "30px" }}
      >
        <Col lg={12}>
          <h1 style={{ fontSize: "1.71429em" }}>Your Works</h1>
          <hr></hr>
        </Col>
      </Row>

      {/* Session two */}

      <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
        <div className="d-flex justify-content-between mb-3">
          <h6 style={{ marginRight: "10px" }}>Recent Projects</h6>
          <Button style={{ backgroundColor: "#385a64", border: 0 }} size="sm">
            {" "}
            View All{" "}
          </Button>
        </div>

        {/* session two container one begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/195/195549.png?ga=GA1.1.252936203.1681415593"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        AMS
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>
                        Account Management System
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="success" size="sm">
                    Completed
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Manoj L</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>manoj@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "49",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>365 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      08 Nov 2022 - 08 Nov 2023
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container one end*/}

        {/* session two container Two begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        LMS
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>
                        Learning Management System
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="primary" size="sm">
                    In Progress
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Jai Kumar</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>jaikumar@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>578 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      25 Aug 2022 - 01 March 2024
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container Two end*/}

        {/* session two container Three begin */}
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/195/195542.png?ga=GA1.1.252936203.1681415593"
                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <Row>
                      <Col style={{ fontSize: "18px", fontWeight: "bold" }}>
                        OST
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "12px" }}>Onboarder's Trail</Col>
                    </Row>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="warning" size="sm">
                    On Tracking
                  </Button>
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Manager</p>
                  <div
                    className="d-flex align-item-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <Row>
                        <Col>
                          <p style={{ fontSize: "12px" }}>Jaikumar</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ marginTop: "-15px" }}>
                          <p style={{ fontSize: "12px" }}>jaikumar@tagcs.in</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Collaborators</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "49",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p style={{ fontSize: "14px" }}>Project Duration</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>6 Days</p>
                  </div>
                </Col>
                <Col>
                  <p style={{ fontSize: "14px" }}>Initiation & Closure date</p>
                  <div className="d-flex" style={{ marginTop: "-8px" }}>
                    <p style={{ fontSize: "12px" }}>
                      08 Nov 2023 - 12 Nov 2023
                    </p>
                  </div>
                </Col>
              </Row>
              <hr style={{ marginTop: "-5px" }}></hr>
              <p style={{ fontSize: "14px" }}>Quick Links</p>
              <div className="d-flex" style={{ marginTop: "-8px" }}>
                <a href="/projects" style={{ fontSize: "12px" }}>
                  View Project
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Story
                </a>
                <a
                  href="/projects"
                  style={{ fontSize: "12px", marginLeft: "10px" }}
                >
                  View Modules
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* session two container Three end*/}

        {/*Session Three begins for tab */}
        <Row>
          <Col>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="Worked on" title="Worked on">
                <ListGroup>

                  {/* List One */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Display the student assigment report on the datatable
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              LMS- 05 . Learning Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="primary" size="sm" style={{marginLeft: "10px"}}>
                          In Progress
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                  {/* List Two */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Add Filters by date, exam, subject, unit
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              LMS- 04 . Learning Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="primary" size="sm" style={{marginLeft: "10px"}}>
                          In Progress
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                  {/* List Three */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/195/195549.png?ga=GA1.1.252936203.1681415593"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Finall Unit Testing
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              AMS- 56 . Account Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src={ProfilePhoto}
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="success" size="sm" style={{marginLeft: "10px"}}>
                          Completed
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                  {/* List Four */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Create a Dashboard Page
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              LMS- 03 . Learning Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="primary" size="sm" style={{marginLeft: "10px"}}>
                          In Progress
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                  {/* List Five */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Implement the logics for Sign In, Sign Up and Forgot Password
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              LMS- 02 . Learning Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="success" size="sm" style={{marginLeft: "10px"}}>
                          Completed
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                  {/* List Six */}

                  <ListGroup.Item action>
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex align-items-center"
                        style={{ padding: "5px", borderRadius: "5px" }}
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/128/4994/4994418.png?ga=GA1.1.252936203.1681415593&track=ais"
                          style={{ width: "35px", height: "35px", cursor: "pointer" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Row>
                            <Col style={{ fontSize: "14px", fontWeight: "bold" }}>
                              Analysis the requirement document
                            </Col>
                          </Row>
                          <Row>
                            <Col style={{ fontSize: "12px" }}>
                              LMS- 01 . Learning Management System
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                      <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "50",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "48",
                        marginLeft: "-10px",
                      }}
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                      roundedCircle
                      style={{
                        width: "35px",
                        height: "35px",
                        cursor: "pointer",
                        zIndex: "47",
                        marginLeft: "-10px",
                      }}
                    />
                        <Button variant="success" size="sm" style={{marginLeft: "10px"}}>
                          Completed
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>

                </ListGroup>
              </Tab>

              <Tab eventKey="Assigned to me" title="Assigned to me">
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://img.freepik.com/free-vector/yoga-office-concept-illustration_114360-6853.jpg?size=626&ext=jpg&uid=R116317829" />
                      <Card.Body>
                        <Card.Text className='text-center'>
                          You currently have no tasks assigned to you. Enjoy your day!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Stared" title="Stared">
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://img.freepik.com/free-vector/cute-astronaut-illustration_114360-8539.jpg?size=626&ext=jpg&uid=R116317829" />
                      <Card.Body>
                        <Card.Text className='text-center'>
                          Star your work for quick access
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Report" title="Report">
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
                    <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://img.freepik.com/free-vector/cute-astronaut-illustration_114360-8539.jpg?size=626&ext=jpg&uid=R116317829" />
                      <Card.Body>
                        <Card.Text className='text-center'>
                          Star your work for quick access
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

            </Tabs>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default CtashDashboard;