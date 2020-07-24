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
            applicantsMatch.firstName.toLowerCase().startsWith(action.value) ||
            applicantsMatch.lastName.toLowerCase().startsWith(action.value) ||
            applicantsMatch.email.toLowerCase().startsWith(action.value)
        )
        .reduce((r, a) => {
          r[a.status] = [...(r[a.status] || []), a];
          return r;
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
