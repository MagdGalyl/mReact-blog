export default (state = [], action) => {
  // Simple Baby Step
  // if (action === "FETCH_POSTS") {
  //   return action.payload;
  // }
  // return state;
  // The real way
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
