const APPLICANT_SEARCH = "APPLICANT_SEARCH";
const SET_APPLICANTS = "SET_APPLICANTS";

export const searchApp = value => {
  return {
    type: APPLICANT_SEARCH,
    value
  };
};

export const setApplicants = applicants => {
  return {
    type: SET_APPLICANTS,
    applicants: applicants
  };
};

export const failApplicants = error => {
  return {
    type: FAIL_APPLICANTS,
    error: error
  };
};

export const getApplicants = () => {
  return dispatch => {
    fetch("https://my-json-server.typicode.com/ApurvaZun/JSONData/applicants")
      .then(response => response.json())
      .then(data => {
        dispatch(setApplicants(data));
      })
      .catch(error => dispatch(failApplicants(error)));
  };
};
