/** Reset the projects in this state by giving a whole new set. */
const RESET_PROJECTS = "RESET_PROJECTS";
const resetProjects = (projects) => ({
    type: RESET_PROJECTS,
    projects
});

/** Group everything to export under one namespace. */
const ProjectActions = {
    RESET_PROJECTS, resetProjects
};

export default ProjectActions;