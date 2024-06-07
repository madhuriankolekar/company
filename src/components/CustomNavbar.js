import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, OverlayTrigger, Popover, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleMouseEnter = (event) => {
    setShowPopover(true);
    setTarget(event.target);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
    setTarget(null);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSignup = () => {
    handleCloseModal();
    navigate('/signup'); // Navigate to the Signup page
  };

  const renderNavLinkWithPopover = (label, href, popoverContent) => (
    <OverlayTrigger
      show={showPopover && target && target.getAttribute('href') === href}
      target={target}
      placement="bottom"
      overlay={
        <Popover id="popover-basic" className="popover-with-arrow">
          <Popover.Header as="h3">{label}</Popover.Header>
          <Popover.Body>
            {popoverContent}
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </Nav.Link>
    </OverlayTrigger>
  );

  return (
    <div>
      <BootstrapNavbar bg="light" expand="lg">
        <BootstrapNavbar.Brand href="#home">Navbar</BootstrapNavbar.Brand>
        <Form className="d-flex" style={{ width: '50%', margin: '0 auto' }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className="mr-2">Search</Button>
          <Button variant="outline-primary" onClick={handleShowModal}>Login</Button>
        </Form>
      </BootstrapNavbar>
      <BootstrapNavbar bg="light" expand="lg">
        <Nav className="mr-auto">
          {renderNavLinkWithPopover('Home', '#home', 'This is the Home popover content.')}
          {renderNavLinkWithPopover('Tshirt', '#tshirt', 'This is the Tshirt popover content.')}
          {renderNavLinkWithPopover('Pants', '#pants', 'This is the Pants popover content.')}
          {renderNavLinkWithPopover('Jacket', '#jacket', 'This is the Jacket popover content.')}
          {renderNavLinkWithPopover('Trophy', '#trophy', 'This is the Trophy popover content.')}
          {renderNavLinkWithPopover('Pens', '#pens', 'This is the Pens popover content.')}
        </Nav>
      </BootstrapNavbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSignup}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomNavbar;
