import React from "react";
import JCJButton from "../custom-blocks/JCJButton";

const ProjectPageComponent = () =>
    <div className={"jcj-full-page"}>
        <p className={"jcj-tagline"}>I'm a full-stack developer and hobby designer.</p>
        <JCJButton link={"/"} text={"Return home."} direction={"up"}/>
    </div>;

export default ProjectPageComponent;