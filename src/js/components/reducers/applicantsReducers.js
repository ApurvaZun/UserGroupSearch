const initState = {
  appointment_set: [
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
      status: "appointment_set",
      bid: 0
    }
  ],
  viewed: [
    {
      id: 4,
      firstName: "Max",
      lastName: "Mustermann",
      telNo: "+49 146 393 87765",
      email: "mmustermann@gmail.com",
      status: "viewed",
      bid: 0
    },
    {
      id: 5,
      firstName: "Olive",
      lastName: "Yew",
      telNo: "+49 146 398 98765",
      email: "oyew@gmail.com",
      status: "viewed",
      bid: 0
    },
    {
      id: 6,
      firstName: "Aida",
      lastName: "Bugg",
      telNo: "+49 146 345 98007",
      email: "abugg@gmail.com",
      status: "viewed",
      bid: 0
    }
  ]
};

const applicantReducers = (state = initState, action) => {
  return state;
};

export default applicantReducers;
