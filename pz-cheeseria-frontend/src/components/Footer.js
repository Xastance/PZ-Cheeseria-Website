import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  // Function to trigger alert
  const handleLinkClick = () => {
    alert('Link not currently implemented/working');
  };

  return (
    <footer className="bg-dark text-light pt-4 mt-auto">
      <Container>
        <Row>
          <Col md="4">
            <h5>PZ Cheeseria</h5>
            <p>Delicious, hand-crafted cheeses delivered to your door.</p>
          </Col>
          <Col md="4" className="text-center">
            <h5>Follow Us</h5>
            {/* Social media links with temporary alert */}
            <div className="d-flex justify-content-center">
              <Facebook className="mx-2" size={24} color="white" onClick={handleLinkClick} style={{ cursor: 'pointer' }} />
              <Twitter className="mx-2" size={24} color="white" onClick={handleLinkClick} style={{ cursor: 'pointer' }} />
              <Instagram className="mx-2" size={24} color="white" onClick={handleLinkClick} style={{ cursor: 'pointer' }} />
            </div>
          </Col>
          <Col md="4" className="text-md-end">
            <h5>Contact Us</h5>
            {/* Email link with temporary alert */}
            <p>
              Email: <span style={{ cursor: 'pointer', color: '#61dafb' }} onClick={handleLinkClick}>support@pzcheeseria.com</span>
            </p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 PZ Cheeseria. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
