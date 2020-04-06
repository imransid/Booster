// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
  load: true,
  loaded_data: [],
  total_price: 0,
  load_borrow_data: [],
  load_borrow: false,
  emi_loader: true,
  Load_EMI_Data: [],
  status: ""
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
    case actionType.ADD_EMI_DB:
      return {
        ...state,
        emi_loader: true
      };
    case actionType.UPDATE_EMI_DB:
      return {
        ...state,
        emi_loader: true
      };
    case actionType.LOADED_EMI_DB:
      return {
        ...state,
        emi_loader: false,
        Load_EMI_Data: action.Load_EMI_Data,
        status: action.status
      };
    default:
      return state;
  }
};
