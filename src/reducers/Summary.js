import actionType from "../constant/constant";

const initialState = {
  today_data: [],
  weekly_data: [],
  month_data: [],
  year_data: [],
  loader: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SUMMARY_DATA_LOAD:
      return {
        ...state,
        today_data: action.today_data,
        weekly_data: action.weekly_data,
        month_data: action.month_data,
        year_data: action.year_data,
        loader: action.loader
      };
    case actionType.SUMMARY_TODAY_LOAD:
      return {
        ...state,
        today_data: action.today_data,
        loader: action.loader
      };
    case actionType.SUMMARY_WEEK_LOAD:
      return {
        ...state,
        weekly_data: action.weekly_data,
        loader: action.loader
      };
    case actionType.SUMMARY_MONTH_LOAD:
      return {
        ...state,
        month_data: action.month_data,
        loader: action.loader
      };
    case actionType.SUMMARY_YEAR_LOAD:
      return {
        ...state,
        year_data: action.year_data,
        loader: action.loader
      };
    default:
      return state;
  }
};
