import actionType from "../constant/constant";

const initialState = {
  userdata: 0,
  nav: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER:
      return {
        ...state,
        userdata: action.result
      };
    case actionType.CUSNAVLOAD:
      return {
        ...state,
        nav: action.nav
      };
    default:
      return state;
  }
};
