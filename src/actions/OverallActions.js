/** Change to another page. */
const CHANGE_PAGE = "CHANGE_PAGE";
const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
});

/** Group everything to export under one namespace. */
const OverallActions = {
    CHANGE_PAGE, changePage
};

export default OverallActions;