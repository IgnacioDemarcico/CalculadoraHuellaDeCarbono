import React from "react";
import  "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
function NavBar() {
  return (
    <React.Fragment>
    <Nav className="navbar"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="item" href="/">Calculadora</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  className="item" href="/Consejos">Consejos para reducirla</Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet/>
    </React.Fragment>
  );
}

export default NavBar;