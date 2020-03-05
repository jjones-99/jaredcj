import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BioPageComponent from "./BioPage/BioPageComponent";
import HomePageComponent from "./HomePage/HomePageComponent";
import ProjectPageComponent from "./ProjectPage/ProjectPageComponent";
import "../styles.scss";

const MainSiteComponent = () =>
    <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={"/"}
                       exact={true}>
                    <HomePageComponent/>
                </Route>
                <Route path={"/projects"}
                       exact={true}>
                    <ProjectPageComponent/>
                </Route>
                <Route path={"/bio"}
                       exact={true}>
                    <BioPageComponent/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>;


export default MainSiteComponent;