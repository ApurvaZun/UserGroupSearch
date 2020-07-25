const initState = {
  applicants: null,
  error: null,
  applicantSearch: null
};

const applicantReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_APPLICANTS":
      return {
        ...state,
        applicants: action.applicants
      };

    case "FAIL_APPLICANTS":
      return {
        ...state,
        error: action.error
      };

    case "APPLICANT_SEARCH":
      let group = state.applicants
        .filter(
          applicantsMatch =>
            applicantsMatch.firstName
              .toLowerCase()
              .includes(action.value.toLowerCase()) ||
            applicantsMatch.lastName
              .toLowerCase()
              .includes(action.value.toLowerCase()) ||
            applicantsMatch.email
              .toLowerCase()
              .includes(action.value.toLowerCase())
        )
        .reduce((res, applicant) => {
          res[applicant.status] = [...(res[applicant.status] || []), applicant];
          return res;
        }, {});

      return {
        ...state,
        applicantSearch: group
      };

    default:
      return state;
  }
};

export default applicantReducers;
