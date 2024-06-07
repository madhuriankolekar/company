// src/Navbar.js

import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, OverlayTrigger, Popover, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleMouseEnter = (event) => {
    setShow(true);
    setTarget(event.target);
  };

  const handleMouseLeave = () => {
    setShow(false);
    setTarget(null);
  };

  const renderNavLinkWithPopover = (label, href, popoverContent) => (
    <OverlayTrigger
      show={show && target && target.getAttribute('href') === href}
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
          <Button variant="outline-success">Search</Button>
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
    </div>
  );
};

export default CustomNavbar;
