import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavbarComponent = ({page}) =>
    <Navbar>
        <Navbar.Brand href={"/"}>Jared Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="jcj-navbar"/>
        <Navbar.Collapse id="jcj-navbar">
            <Nav variant={"pills"} activeKey={page} className="ml-auto">
                <Nav.Link eventKey={"home"} href="/">Home</Nav.Link>
                <Nav.Link eventKey={"bio"} href="/bio">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

export default NavbarComponent;