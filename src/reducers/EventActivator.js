// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
  load: true,
  loaded_data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOADED_MCM_DB:
      return {
        ...state,
        sync: action.sync,
        loaded_data: action.loaded_data,
        load: false
      };

    default:
      return state;
  }
};
