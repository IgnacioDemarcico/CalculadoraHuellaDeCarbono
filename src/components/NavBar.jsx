import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <React.Fragment>
    <Nav
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/otrolado">Active2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet/>
    </React.Fragment>
  );
}

export default NavBar;