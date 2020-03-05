import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./NavbarComponent.scss"

const NavbarComponent = ({page}) =>
    <Navbar>
        <Navbar.Brand href={"/"}>Jared Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="jcj-navbar"/>
        <Navbar.Collapse id="jcj-navbar">
            <Nav variant={"pills"} activeKey={page} className="ml-auto">
                <Nav.Link className={"jcj-navbar-pill"} eventKey={"home"} href="/">Home</Nav.Link>
                <Nav.Link className={"jcj-navbar-pill"} eventKey={"bio"} href="/bio">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

export default NavbarComponent;