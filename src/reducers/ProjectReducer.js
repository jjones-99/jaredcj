import ProjectActions from "../actions/ProjectActions";

/** The initial state has no projects. */
const initialState = {
    projects: []
};

/** Make the redux FSA for projects. */
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProjectActions.RESET_PROJECTS:
            return {
                projects: action.projects
            };
        default:
            return state;
    }
};

export default projectReducer;