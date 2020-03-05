import React from "react";

const EducationComponent = () =>
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
    </section>;

export default EducationComponent;