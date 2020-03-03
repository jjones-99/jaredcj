// TODO:
const API_URL = "";

/** Retrieves all projects from the database. */
const findAllProjects = () =>
    fetch(`${API_URL}`)
        .then(response => response.json());

/** Group everything to export under one namespace. */
const ProjectService = {
    findAllProjects
};

export default ProjectService;