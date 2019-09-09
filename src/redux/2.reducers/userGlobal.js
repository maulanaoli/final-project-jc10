const INITIAL_STATE = {
  logoImg: "",
  organ: "",
  nickName: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IMG_CLICK":
      return {
        ...INITIAL_STATE,
        logoImg: action.payload,
        organ: action.organisasi,
        nickName: action.nickname
      };
    default:
      return state;
  }
};
