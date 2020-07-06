import React from "react";
import NavbarComponent from "../custom-blocks/NavbarComponent";
import "./ProjectPageComponent.scss";
import { Col, Row } from "react-bootstrap";
import JCJButton from "../custom-blocks/JCJButton";

const ProjectPageComponent = () => (
  <div className={""}>
    <NavbarComponent page={"projects"} />

    <article id={"jcj-projects"}>
      <Row className={"jcj-projects-row"}>
        <Col md className={"jcj-projects-col jcj-projects-header"}>
          <h2 className={"jcj-projects-title"}>PROJECTS</h2>
          <JCJButton
            link={"https://github.com/jjones-99"}
            new_tab
            text={"Visit my GitHub."}
          />
        </Col>
        <Col md className={"jcj-projects-col"}>
          <section className={"jcj-projects-section"}>
            <h3>ABOUT THESE PROJECTS</h3>
            <p>
              I learn from experience so whether in or out of classwork,
              projects are my favorite way to get familiar with new concepts and
              technologies.
            </p>
            <p>
              This is a living list, and will be updated as I start new projects
              and release them publicly. Check out my Github or the individual
              project buttons to view the source code, if available.
            </p>
          </section>
        </Col>
      </Row>

      <Row className={"jcj-projects-row"}>
        <Col lg className={"jcj-projects-col"}>
          <section className={"jcj-projects-section"}>
            <h3 className={"jcj-projects-project"}>PERSONAL WEBSITE</h3>
            <h4 className={"jcj-projects-themes"}>
              HTML, CSS, React.js, JavaScript, Design
            </h4>
            <p>
              I'm most interested in front-end/full-stack development. I want to
              produce content that conveys a brand and personality alongside
              important information. To that end, it's important to me to have
              my own online presence through a personal website.
            </p>
            <p>
              My coursework was mainly focused on low-level software
              development, so I also wanted to take the opportunity to get more
              experience with technologies I'm more likely to use in the future.
            </p>
            <JCJButton
              link={"https://github.com/jjones-99/jaredcj"}
              new_tab
              text={"View the code."}
            />
          </section>
        </Col>
        <Col
          lg
          className={"text-center text-lg-right order-first order-lg-last"}
        >
          <img
            src={require("../../assets/PersonalWebsite.png")}
            alt=""
            className={"mr-lg-4 jcj-projects-image"}
            height={"350px"}
          />
        </Col>
      </Row>

      <Row className={"jcj-projects-row"}>
        <Col lg className={"text-center text-lg-left"}>
          <img
            src={require("../../assets/StartupVicHomepage.png")}
            alt=""
            className={"ml-md-4 jcj-projects-image"}
            height={"450px"}
          />
        </Col>
        <Col lg className={"jcj-projects-col"}>
          <section className={"jcj-projects-section"}>
            <h3 className={"jcj-projects-project"}>
              STARTUP VICTORIA'S WEBSITE
            </h3>
            <h4 className={"jcj-projects-themes"}>
              WordPress, PHP, JavaScript, HTML, CSS
            </h4>
            <p>
              During my internship working at Startup Victoria, I maintained,
              moderated, and developed new functionality for their community
              website, while improving the professional quality of the public
              site. This involved a great deal of fixing bugs in function and
              style, so it was a great exercise in triage and the Jobs to be
              Done theory.
            </p>
            <p>
              I was the only developer in the small team, so I had more
              responsibility and ownership of the project. There's some of my
              work on every page. I did front-side work with styles and design
              as well as back-side work with creating addons to improve the
              moderation of the content.
            </p>
            <p>
              Because I was doing a lot of work on a lot of different
              sectors—and using technology I hadn't any experience with—it was a
              great opportunity to take my own time teaching myself more about
              the tools I had in order to enhance my work.
            </p>
            <p>I continue to do ad hoc work on this project remotely.</p>
            <JCJButton
              link={"https://startupvictoria.com.au"}
              new_tab
              text={"Visit the website."}
            />
          </section>
        </Col>
      </Row>

      <Row className={"jcj-projects-row"}>
        <Col lg className={"jcj-projects-col"}>
          <section className={"jcj-projects-section"}>
            <h3 className={"jcj-projects-project"}>DUCT TAPE'S BLOG</h3>
            <h4 className={"jcj-projects-themes"}>Squarespace, HTML, CSS</h4>
            <p>
              While I was in Australia working at Startup Victoria, we had a
              partnership with Victoria University to work on a project called
              "Duct Tape", a publication shining the spotlight on incredible
              founders across the state of Victoria.
            </p>
            <p>
              I took on a variety of duties relating to this publication, one of
              them being to support the designer on the creation of the online
              form of the publication. This involved discussing how the design
              was to look, implementing that design, and uploading the content I
              received from our researcher.
            </p>
            <p>
              This was the first time I was able to work with a professional
              designer on a project, so it was an incredible experience to learn
              about user experience.
            </p>
            <JCJButton
              link={"https://ducttaped.co"}
              new_tab
              text={"Visit the website."}
            />
          </section>
        </Col>
        <Col
          lg
          className={"text-center text-lg-right order-first order-lg-last"}
        >
          <img
            src={require("../../assets/DuctTapeHomepage.png")}
            alt=""
            className={"mr-lg-4 jcj-projects-image"}
            height={"350px"}
          />
        </Col>
      </Row>

      <Row className={"jcj-projects-row"}>
        <Col lg className={"text-center text-lg-left"}>
          <img
            src={require("../../assets/Tetris.png")}
            alt=""
            className={"ml-md-4 jcj-projects-image"}
            height={"450px"}
          />
        </Col>
        <Col lg className={"jcj-projects-col"}>
          <section className={"jcj-projects-section"}>
            <h3 className={"jcj-projects-project"}>TETRIS SURVIVAL</h3>
            <h4 className={"jcj-projects-themes"}>C++, SDL</h4>
            <p>
              In the course "Programming in C++", we were tasked with designing
              and developing a game. My group created a survival game based on
              Tetris. The player controls a small avatar that jumps around a
              Tetris scene as blocks randomly fall from the sky. The goal is to
              reach the top of the screen without getting crushed by
              tetrominoes.
            </p>
            <p>
              This was a really great exercise in creativity, working as a
              group, and learning how to use the tools we had as we progressed.
            </p>
            <JCJButton
              link={"https://github.com/jjones-99/TetrisSurvival"}
              new_tab
              text={"View the code."}
            />
          </section>
        </Col>
      </Row>

      <div className={"text-center"}>
        <img
          src={require("../../assets/Chelicerae.png")}
          alt=""
          className={"jcj-projects-image-footer"}
          height={"350px"}
        />
      </div>
    </article>
  </div>
);

export default ProjectPageComponent;
