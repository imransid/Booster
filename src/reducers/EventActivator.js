// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
  load: true,
  loaded_data: [],
  total_price: 0
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

    default:
      return state;
  }
};
