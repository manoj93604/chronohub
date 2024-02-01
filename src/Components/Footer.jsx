import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#f8f9fa', // Background color
        color: '#212529', // Text color
        padding: '10px', // Padding
        marginTop: '5%', // Margin-top
        fontSize: '10px'
      };

  return (
     <footer style={footerStyle} className='p-0 mt-4'>
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            &copy; {new Date().getFullYear()} ChronoHub Developed by Manoj
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
