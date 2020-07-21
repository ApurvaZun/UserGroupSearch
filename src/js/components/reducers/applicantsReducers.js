const initState = {
  applicants: [
    {
      id: 1,
      firstName: "Friedrich",
      lastName: "Hendrich",
      telNo: "+49 146 333 83933",
      email: "fhendrich@gmail.com",
      status: "appointment_set",
      bid: 0
    },
    {
      id: 2,
      firstName: "Mila",
      lastName: "Hasting",
      telNo: "+49 146 338 83883",
      email: "mhasting@gmail.com",
      status: "appointment_set",
      bid: 0
    },
    {
      id: 3,
      firstName: "Angela",
      lastName: "Spark",
      telNo: "+49 146 338 98890",
      email: "aspark@gmail.com",
      status: "viewed",
      bid: 0
    }
  ],
  applicantSearch: []
};

const applicantReducers = (state = initState, action) => {
  if (action.type === "APPLICANT_SEARCH") {
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
  } else return state;
};

export default applicantReducers;
