import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./NavbarComponent.scss"
import {FaGithub, FaLinkedin} from "react-icons/all";

const NavbarComponent = ({page}) =>
    <Navbar expand={"md"}>
        <Navbar.Brand href={"/"}>Jared Jones</Navbar.Brand>
        <Navbar.Toggle aria-controls="jcj-navbar"/>
        <Navbar.Collapse id="jcj-navbar">
            <Nav variant={"pills"} activeKey={page} className="ml-auto">
                <Nav.Link className={"jcj-navbar-pill"} eventKey={"home"} href="/">Home</Nav.Link>
                <Nav.Link className={"jcj-navbar-pill"} eventKey={"bio"} href="/bio">Resume</Nav.Link>
                <Nav.Link className={"jcj-navbar-pill"} eventKey={"projects"} href="/projects">Projects</Nav.Link>
                <Nav.Link className={"jcj-navbar-pill"} eventKey={page}
                          href="https://linkedin.com/in/jaredcj" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} color={'gray'}/>
                </Nav.Link>
                <Nav.Link className={"jcj-navbar-pill"} eventKey={page}
                          href="https://github.com/jjones-99" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} color={'gray'}/>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

export default NavbarComponent;