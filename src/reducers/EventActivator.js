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
  status: "",
  Loan_Data: [],
  Loan_status: "",
  loan_loader: true,
  loan_Statistics_loader: true,
  loan_Statistics_data: [],
  loan_Statistics_details: [],
  total_lend: 0,
  total_borrow: 0,
  total_overview: 0,
  paid_overview: 0,
  remaining_overview: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_BORROWORLEND_DB:
      return {
        ...state,
        load_borrow: false,
      };
    case actionType.LOADED_MCM_DB:
      return {
        ...state,
        sync: action.sync,
        loaded_data: action.loaded_data,
        load: false,
        total_price: action.total_price,
      };
    case actionType.LOADED_BORROWORLEND_DB:
      return {
        ...state,
        load_borrow_data: action.load_borrow_data,
        load_borrow: action.load_borrow,
        total_borrow: action.total_borrow,
        total_lend: action.total_lend,
        total_overview: action.total_overview,
        paid_overview: action.paid_overview,
        remaining_overview: action.remaining_overview,
      };
    case actionType.ADD_EMI_DB:
      return {
        ...state,
        emi_loader: true,
      };
    case actionType.UPDATE_EMI_DB:
      return {
        ...state,
        emi_loader: true,
      };
    case actionType.LOADED_EMI_DB:
      return {
        ...state,
        emi_loader: false,
        Load_EMI_Data: action.Load_EMI_Data,
        status: action.status,
      };
    case actionType.LOAN_DB_LOEDED:
      return {
        ...state,
        loan_loader: false,
        Loan_status: action.status,
        Loan_Data: action.Loan_Data,
      };
    case actionType.ADD_LOAN:
      return {
        ...state,
        loan_loader: true,
      };
    case actionType.RETRIVE_STATISTICS:
      return {
        ...state,
        loan_Statistics_loader: false,
        loan_Statistics_data: action.loan_Statistics_data,
        loan_Statistics_details: action.loan_Statistics_details,
      };
    case actionType.STATISTICS:
      return {
        ...state,
        loan_Statistics_loader: true,
      };

    case actionType.LOANUPDATE:
      return {
        ...state,
        loan_Statistics_loader: true,
      };
    case actionType.REFRESHBORROWORLEND:
      return {
        ...state,
        load_borrow: false,
      };
    default:
      return state;
  }
};
