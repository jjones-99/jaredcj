import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronLeft, faChevronRight, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "./JCJButton.scss";

const getIconForDirection = (direction) => {
    switch (direction) {
        case "up":
            return <FontAwesomeIcon icon={faChevronUp}/>;
        case "down":
            return <FontAwesomeIcon icon={faChevronDown}/>;
        case "left":
            return <FontAwesomeIcon icon={faChevronLeft}/>;
        case "right":
            return <FontAwesomeIcon icon={faChevronRight}/>;
        default:
            return;
    }
};

const JCJButton = ({link = "#", text, direction = "none"}) =>
    <Link to={link} className={"jcj-button d-flex justify-content-between align-items-center"}>
        <span>{getIconForDirection(direction)}</span>
        <span className={"jcj-button-text"}>{text}</span>
        <span>{getIconForDirection(direction)}</span>
    </Link>;

export default JCJButton;