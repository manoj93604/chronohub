import React, { useState } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Image } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import ProfilePhoto from "../Assets/images/profile.jpg";
import { Accordion } from "react-bootstrap";

function CreateProject(props) {


    const options = [
      {
        value: "Team-Management",
        label: (
          <div>
            <img
              src="https://img.icons8.com/?size=80&id=wG20FqoYHvVB&format=png"
              alt="Team Management"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
            />
            Team-Management
          </div>
        ),
      },
    ];


    const PLoptions = [
      {
        value: "Manoj L",
        label: (
          <div>
            <Image
              src={ProfilePhoto}
              alt="Team Management"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
              roundedCircle
            />
            Manoj L
          </div>
        ),
      },
      {
        value: "Jaikumar",
        label: (
          <div>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
              alt="Team Management"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
              roundedCircle
            />
            Jaikumar
          </div>
        ),
      },
      {
        value: "Gokul",
        label: (
          <div>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
              alt="Team Management"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
              roundedCircle
            />
            Gokul
          </div>
        ),
      },
      {
        value: "Sriharinivas",
        label: (
          <div>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
              alt="Team Management"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
              roundedCircle
            />
            Sriharinivas
          </div>
        ),
      },
    ];

        const Colaboptions = [
          {
            value: "Manoj L",
            label: (
              <div>
                <Image
                  src={ProfilePhoto}
                  alt="Team Management"
                  style={{ width: "35px", height: "35px", marginRight: "10px" }}
                  roundedCircle
                />
                Manoj L
              </div>
            ),
          },
          {
            value: "Jaikumar",
            label: (
              <div>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195528.png?ga=GA1.1.252936203.1681415593"
                  alt="Team Management"
                  style={{ width: "35px", height: "35px", marginRight: "10px" }}
                  roundedCircle
                />
                Jaikumar
              </div>
            ),
          },
          {
            value: "Gokul",
            label: (
              <div>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195545.png?ga=GA1.1.252936203.1681415593"
                  alt="Team Management"
                  style={{ width: "35px", height: "35px", marginRight: "10px" }}
                  roundedCircle
                />
                Gokul
              </div>
            ),
          },
          {
            value: "Sriharinivas",
            label: (
              <div>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/195/195562.png?ga=GA1.1.252936203.1681415593"
                  alt="Team Management"
                  style={{ width: "35px", height: "35px", marginRight: "10px" }}
                  roundedCircle
                />
                Sriharinivas
              </div>
            ),
          },
        ];

        // const [showCreate, setShowCreate] = useState(1);
        // const [showEpic, setShowEpic] = useState(2);
        // const [showStory, setShowStory] = useState(3);
        // const [showTask, setShowTask] = useState(4);

        const [currentPage, setCurrentPage] = useState(1);

        const handleCreateEoic = () =>{
          setCurrentPage(2);
        }
        const handleCreateStory = () => {
          setCurrentPage(3);
        };
        

        const handleBack = () => {
          setCurrentPage(currentPage - 1);
        }

        const[accordionCount, setAccordionCount] = useState(1);

        const addAccordion = () => {
          setAccordionCount(accordionCount + 1);
        };

        const accordions = Array.from(
          { length: accordionCount },
          (_, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <div className="d-flex align-items-center justify-content-between">
                  <Image
                    src="https://img.icons8.com/?size=80&id=ZmpJNQixtcdQ&format=png"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  AMS - {index + 1}{" "}
                  {index === accordionCount - 1 && (
                    <Button variant="success" size="sm" onClick={addAccordion}>
                      +
                    </Button>
                  )}
                  {accordionCount > 1 && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeAccordion(index)}
                    >
                      -
                    </Button>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {/* Your accordion body content */}
              </Accordion.Body>
            </Accordion.Item>
          )
        );

        // Add this function to handle removing accordions
        const removeAccordion = (indexToRemove) => {
          setAccordionCount((prevCount) => prevCount - 1);
          // setAccordions(
          //   accordions.filter((_, index) => index !== indexToRemove)
          // );
        };



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Project
          <p style={{ fontSize: "12px" }}>
            Explore what's possible when you collaborate with your team. Edit
            project details anytime in project settings.
          </p>
        </Modal.Title>
      </Modal.Header>
      {currentPage === 1 && (
        <Modal.Body>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label htmlFor="inputPassword5">
                    Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Try a team name, project goal, milestone..."
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlText"
                >
                  <Form.Label htmlFor="inputPassword5">
                    Project Type<span className="text-danger">*</span>
                  </Form.Label>
                  <Select options={options} />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlText"
                >
                  <Form.Label htmlFor="inputPassword5">
                    Key<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Prefix for Your Project"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlText"
                >
                  <Form.Label htmlFor="inputPassword5">
                    Project Lead/Manager<span className="text-danger">*</span>
                  </Form.Label>
                  <Select options={PLoptions} isClearable isSearchable />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlText"
                >
                  <Form.Label htmlFor="inputPassword5">
                    Collaborators<span className="text-danger">*</span>
                  </Form.Label>
                  <Select
                    options={Colaboptions}
                    isMulti
                    isClearable
                    isSearchable
                  />
                </Form.Group>
              </Form>
            </Col>

            {/* <Col className="d-flex justify-content-center align-items-center mb-3 d-none d-lg-block">
            <Image
              src="https://img.freepik.com/free-vector/think-outside-box-concept-illustration_114360-18016.jpg?w=826&t=st=1699985401~exp=1699986001~hmac=604ff4edbcc91ffae264f77c789d791efac497781da22df8872d38bed38170ca"
              roundedCircle
              style={{
                width: "25rem",
                height: "25rem",
                cursor: "pointer",
              }}
            />
          </Col> */}
          </Row>

          <Row>
            <Col>
              <Form>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>
                    Initation & Closure Date
                    <span className="text-danger">*</span>
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Initation"
                    placeholder="DD-MM-YYYY"
                  />
                  <Form.Control aria-label="Closure" placeholder="DD-MM-YYYY" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Project Duration<span className="text-danger">*</span>
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="project duration"
                    aria-describedby="inputGroup-sizing-default"
                    disabled
                    placeholder="5m 1h 6d 1y"
                  />
                </InputGroup>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    Description<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe the project"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      )}

      {currentPage === 2 && (
        <Modal.Body>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                {/* <Image
                  src="https://img.icons8.com/?size=80&id=ZmpJNQixtcdQ&format=png"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                /> */}
                <Modal.Title id="contained-modal-title-vcenter">
                  Epic
                </Modal.Title>
              </div>
              <Accordion className= "m-1" defaultActiveKey="0">{accordions}</Accordion>
            </Col>
          </Row>

          <Row>
            <Col></Col>
          </Row>
        </Modal.Body>
      )}
      {currentPage === 1 && (
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button onClick={handleCreateEoic}>Next</Button>
        </Modal.Footer>
      )}
      {currentPage === 2 && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCreateEoic}>
            Skip
          </Button>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleCreateStory}>Create Epic</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default CreateProject;
