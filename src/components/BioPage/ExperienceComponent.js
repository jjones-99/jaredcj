import React from "react";

const ExperienceComponent = () =>
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
                    <a href="https://ducttaped.co/" target="_blank"
                       rel="noreferrer noopener"> publication </a>
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
                    <h4 className={"jcj-resume-job-company"}>Outlaw Golf Club</h4>
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
    </section>;

export default ExperienceComponent;