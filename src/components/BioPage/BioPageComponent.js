import React from "react";
import JCJButton from "../custom-blocks/JCJButton";
import NavbarComponent from "../custom-blocks/NavbarComponent";

const BioPageComponent = () =>
    <div className={""}>
        <NavbarComponent page={"bio"}/>
        <h2 className={"jcj-huge-header fix-to-top fix-to-left"}>RESUME</h2>
        <article id={"jcj-resume"} className={"col-lg-6 float-right"}>
            <section className={"jcj-resume-section"}>
                <h3>ABOUT ME</h3>
                <p>
                    I’m a hard-worker and do my best to enjoy every moment of life. It's not good to worry overmuch
                    about all of the little things that went wrong when we can appreciate everything that went right.
                    I’m always looking to share aid and positivity with others, and I love being able to do that through
                    the work I do.
                </p>
                <p>
                    I believe that the ability to learn and adapt is more important than
                    knowing everything right off the bat. I thrive in environments where I can put extra work in to
                    learn and improve the quality of the work I do.
                </p>
            </section>
            <section className={"jcj-resume-section"}>
                <h3>MY EXPERIENCE</h3>
                <section>
                    <div className={"d-flex justify-content-between flex-wrap"}>
                        <div>
                            <h4 className={"jcj-resume-job-company"}>Startup Victoria</h4>
                            <span className="jcj-resume-job-location">Melbourne, VIC, Australia</span>
                        </div>
                        <p className="jcj-resume-job-dates">Jul 2019 - Dec 2019</p>
                    </div>
                    <p className="jcj-resume-job-title">Digital Content and Community Coordinator</p>
                    <ul className="jcj-resume-job-bullets">
                        <li>
                            Maintained, moderated, and developed new features for the community website.
                        </li>
                        <li>
                            Worked in and taught myself how to use HTML, PHP, CSS, JavaScript, WordPress, and
                            Squarespace.
                        </li>
                        <li>
                            Participated in a partnership with Victoria University to develop a
                            <a href="https://ducttaped.co/" target={"_blank"}
                               rel={"noreferrer noopener"}> publication </a>
                            showcasing Victorian founders by supporting the designer in developing the online blog.
                        </li>
                        <li>
                            Organized events such as Pitch Nights and implemented them to audiences of up to 500
                            attendees.
                        </li>
                        <li>
                            Communicated with community members in person and through emails and Slack to provide
                            personal support.
                        </li>
                        <li>
                            Developed a Google spreadsheet to facilitate an anonymous application judging process for
                            the hire of a new role.
                        </li>
                    </ul>
                </section>
                <section>
                    <div className={"d-flex justify-content-between flex-wrap"}>
                        <div>
                            <h4 className={"jcj-resume-job-company"}>Outlaw Golf Course</h4>
                            <span className="jcj-resume-job-location">Hideout, UT</span>
                        </div>
                        <p className="jcj-resume-job-dates">Jun 2017 - Aug 2017</p>
                    </div>
                    <p className="jcj-resume-job-title">Front Desk Representative</p>
                    <ul className="jcj-resume-job-bullets">
                        <li>
                            Performed opening and closing duties across the nine-hole course and in the office.
                        </li>
                        <li>
                            Registered customers in a Google spreadsheet while serving as a cashier.
                        </li>
                        <li>
                            Recorded reservations made through phone calls and in person.
                        </li>
                    </ul>
                </section>
            </section>
            <section className={"jcj-resume-section"}>
                <h3>MY EDUCATION</h3>
                <section>
                    <div className={"d-flex justify-content-between flex-wrap"}>
                        <div>
                            <h4 className={"jcj-resume-school-name"}>Northeastern University</h4>
                            <span className="jcj-resume-school-location">Boston, MA</span>
                        </div>
                        <p className="jcj-resume-school-dates">Aug 2017 - Present</p>
                    </div>
                    <p className="jcj-resume-school-subgroup">Khoury College of Computer Science</p>
                    <div className={"d-flex justify-content-between flex-wrap"}>
                        <span className={"jcj-resume-school-degree"}>
                            Candidate for a Bachelor of Science in Computer Science
                        </span>
                        <span className="jcj-resume-school-degree-date">Exp. May 2020</span>
                    </div>
                    <ul className="jcj-resume-school-bullets">
                        <li>
                            Performed opening and closing duties across the nine-hole course and in the office.
                        </li>
                        <li>
                            Registered customers in a Google spreadsheet while serving as a cashier.
                        </li>
                        <li>
                            Recorded reservations made through phone calls and in person.
                        </li>
                    </ul>
                </section>
            </section>
        </article>
        <nav id={"jcj-project-nav"} className={"jcj-nav fix-to-bottom fix-to-left d-flex"}>
            <JCJButton link={"/"} text={"Return home."} direction={"left"}/>
            <JCJButton link={"#"} text={"Download my resume."}/>
        </nav>
    </div>;

export default BioPageComponent;