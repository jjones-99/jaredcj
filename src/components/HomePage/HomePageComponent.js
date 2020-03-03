import React from "react";
import NavbarComponent from "../custom-blocks/NavbarComponent";
import "./HomePageComponent.scss";

const HomePageComponent = () =>
    <div className={"jcj-full-page"}>
        <NavbarComponent page={"home"}/>

        <h1 id={"jcj-big-name"}>JARED JONES</h1>
    </div>;

export default HomePageComponent;