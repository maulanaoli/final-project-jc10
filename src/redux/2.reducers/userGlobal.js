const INITIAL_STATE = {
  logoImg: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IMG_CLICK":
      return { ...INITIAL_STATE, logoImg: action.payload };
    default:
      return state;
  }
};
