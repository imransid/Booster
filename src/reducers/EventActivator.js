// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
  load: true,
  loaded_data: [],
  total_price: 0,
  load_borrow_data: [],
  load_borrow: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOADED_MCM_DB:
      return {
        ...state,
        sync: action.sync,
        loaded_data: action.loaded_data,
        load: false,
        total_price: action.total_price
      };
    case actionType.LOADED_BORROWORLEND_DB:
      return {
        ...state,
        load_borrow_data: action.load_borrow_data,
        load_borrow: action.load_borrow
      };
    default:
      return state;
  }
};
