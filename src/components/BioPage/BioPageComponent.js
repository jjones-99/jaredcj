import React from "react";
import JCJButton from "../custom-blocks/JCJButton";
import NavbarComponent from "../custom-blocks/NavbarComponent";
import EducationComponent from "./EducationComponent";
import ExperienceComponent from "./ExperienceComponent";
import {Col, Row} from "react-bootstrap";
import "./BioPageComponent.scss";
import ExposureComponent from "./ExposureComponent";

const BioPageComponent = () =>
    <div className={""}>
        <NavbarComponent page={"bio"}/>

        <article id={"jcj-resume"}>
            <Row className={"jcj-resume-row"}>
                <Col md className={"jcj-resume-col jcj-resume-header"}>
                    <h2 className={"jcj-resume-title"}>RESUME</h2>
                    <JCJButton link={"#"} text={"Download my resume. (80 KB)"}/>
                </Col>
                <Col md className={"jcj-resume-col"}>
                    <section className={"jcj-resume-section"}>
                        <h3>ABOUT ME</h3>
                        <p>
                            I’m a hard-worker and do my best to enjoy every moment of life. It's not good to worry
                            overmuch
                            about all of the little things that went wrong when we can appreciate everything that went
                            right.
                            I’m always looking to share aid and positivity with others, and I love being able to do that
                            through
                            the work I do.
                        </p>
                        <p>
                            I believe that the ability to learn and adapt is more important than
                            knowing everything right off the bat. I thrive in environments where I can put extra work in
                            to
                            learn and improve the quality of the work I do.
                        </p>
                    </section>
                </Col>
            </Row>

            <Row className={"jcj-resume-row"}>
                <Col md className={"text-center text-md-left"}>
                    <img src={require("../../assets/Splat.png")} alt=""
                         className={"ml-md-4 jcj-bio-image-left"} height={"500px"}/>
                </Col>
                <Col md className={"jcj-resume-col"}><ExperienceComponent/></Col>
            </Row>

            <Row className={"jcj-resume-row"}>
                <Col md><EducationComponent/></Col>
                <Col md className={"text-center text-md-right"}>
                    <img src={require("../../assets/Avocado.png")} alt=""
                         className={"mr-md-4 jcj-bio-image-right"} height={"350px"}/>
                </Col>
            </Row>

            <Row className={"jcj-resume-row"}>
                <Col md className={"text-center text-md-left"}>
                    <img src={require("../../assets/Splat.png")} alt=""
                         className={"ml-md-4 jcj-bio-image-left"} height={"350px"}/>
                </Col>
                <Col md className={"jcj-resume-col"}><ExposureComponent/></Col>
            </Row>
        </article>
    </div>;

export default BioPageComponent;