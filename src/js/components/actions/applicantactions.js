const APPLICANT_SEARCH = "APPLICANT_SEARCH";

export const searchApp = value => {
  return {
    type: APPLICANT_SEARCH,
    value
  };
};
