export const imgClick = colorBar => {
  return dispatch => {
    var a = colorBar;
    dispatch({
      type: "IMG_CLICK",
      payload: a
    });
  };
};
