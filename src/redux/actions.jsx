export const addListing = (newListing) => {
  return {
    type: "ADD_LISTING",
    value: newListing,
  };
};
