import { call, put } from "redux-saga/effects";
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from "../constant/constant";
import moment from "moment";
import {
  _add_emi,
  _loadEMIDB,
  _StaTusChecker,
  _UpdateEMIDB
} from "./extends_emi";

import {
  Retrive_DB_Loan,
  Add_Loan_DB,
  _load_statistics_DB,
  _Update_LOAN
} from "./extends_Loan_Actions";

let check = moment(new Date());

let Current_month = check.format("MM");
let Current_year = check.format("YYYY");
let P_month = check.subtract(1, "months").format("MM");
let P_year = check.subtract(1, "years").format("YYYY");

// Session By Result

const _session_Checker = (data, sess) => {
  let return_data = [];

  if (sess == "month") {
    data.map(e =>
      e.date.slice(3, 5) == Current_month ? return_data.push(e) : e
    );
  } else if (sess == "p_month") {
    data.map(e => (e.date.slice(3, 5) == P_month ? return_data.push(e) : e));
  } else if (sess == "year") {
    data.map(e =>
      e.date.slice(6, 10) == Current_year ? return_data.push(e) : e
    );
  } else if (sess == "p_year") {
    data.map(e => (e.date.slice(6, 10) == P_year ? return_data.push(e) : e));
  }
  return return_data;
};

export async function _loadMCMDetailsDB(sess) {
  try {
    const data = await AsyncStorage.getItem("MCM@all@Data");
    let data_load;
    if (data !== null) {
      _data = JSON.parse(data);

      data_load = _session_Checker(_data, sess);
    } else {
      data_load = [];
    }
    return data_load;
  } catch (error) {
    console.log("async retrive prlm loadMCMDetails : ", error);
  }
}

export const loadMCMDetails = function*(action) {
  const retive_data = yield call(_loadMCMDetailsDB, action.session);

  const total_price = yield call(_total_Cost, retive_data);

  yield put({
    type: actionType.LOADED_MCM_DB,
    loaded_data: retive_data,
    total_price: total_price
  });
};

const _total_Cost = async Data_array => {
  var total_prices = 0;
  Data_array.map(e => (total_prices = total_prices + parseInt(e.price)));

  return total_prices;
};

export const _loadBorrowORLendDB = function*(action) {
  const BorrowData = yield call(_loadBorroewDB, action.name);

  yield put({
    type: actionType.LOADED_BORROWORLEND_DB,
    load_borrow_data: BorrowData,
    load_borrow: true
  });
};

export async function _loadBorroewDB(name) {
  try {
    console.log("name", name);
    let data;
    name == "lend"
      ? (data = await AsyncStorage.getItem("LEND@all@Data"))
      : (data = await AsyncStorage.getItem("BORROW@all@Data"));

    let data_load;
    if (data !== null) {
      _data = JSON.parse(data);
      data_load = _status_Checker(_data);
    } else {
      data_load = [];
    }
    return data_load;
  } catch (error) {
    console.log("async retrive prlm _loadBorroewDB : ", error);
  }
}

const _status_Checker = data => {
  let _return_data;
  let _result = data.filter(e => {
    if (e.status == true) {
      return e;
    }
  });

  _result.length == 0 ? (_return_data = []) : (_return_data = _result);

  return _return_data;
};

// ALLL EMI

export const add_emi = function*(action) {
  try {
    const all_EMI_Data = yield call(_add_emi, action);

    const StaTusChecker = yield call(_StaTusChecker, all_EMI_Data);

    yield put({
      type: actionType.LOADED_EMI_DB,
      Load_EMI_Data: StaTusChecker,
      status: "add_new_data"
    });
  } catch (error) {
    console.log("Error is add_emi : ", error);
  }
};

export const load_emi = function*(action) {
  try {
    const all_EMI_Data = yield call(_loadEMIDB);

    const StaTusChecker = yield call(_StaTusChecker, all_EMI_Data);

    yield put({
      type: actionType.LOADED_EMI_DB,
      Load_EMI_Data: StaTusChecker,
      status: "retrive_data"
    });
  } catch (error) {
    console.log("Error is add_emi : ", error);
  }
};

// update emi
export const _update_emi = function*(action) {
  try {
    const update_EMI_Data = yield call(_UpdateEMIDB, action);

    const StaTusChecker = yield call(_StaTusChecker, update_EMI_Data);

    yield put({
      type: actionType.LOADED_EMI_DB,
      Load_EMI_Data: StaTusChecker,
      status: "retrive_data"
    });
  } catch (error) {
    console.log("Error is add_emi : ", error);
  }
};

// retrive Loan

export const _retriveLoan = function*(action) {
  try {
    const Loan_Data = yield call(Retrive_DB_Loan);

    yield put({
      type: actionType.LOAN_DB_LOEDED,
      Loan_Data: Loan_Data,
      status: "retrive_data"
    });
  } catch (error) {
    console.log("Error is _retriveLoan : ", error);
  }
};

// ADD LOAN

export const _addLoan = function*(action) {
  try {
    const Loan_Data = yield call(Add_Loan_DB, action);

    console.log("okokokok", Loan_Data);

    yield put({
      type: actionType.LOAN_DB_LOEDED,
      Loan_Data: Loan_Data,
      status: "retrive_data"
    });
  } catch (error) {
    console.log("Error is _retriveLoan : ", error);
  }
};

export const _load_statistics = function*(action) {
  try {
    const Data = yield call(_load_statistics_DB, action);

    yield put({
      type: actionType.RETRIVE_STATISTICS,
      loan_Statistics_data: Data[0],
      loan_Statistics_details: Data[1]
    });
  } catch (error) {
    console.log("Error is _load_statistics : ", error);
  }
};

export const _updateLoan = function*(action) {
  try {
    const Data = yield call(_Update_LOAN, action);

    yield put({
      type: actionType.RETRIVE_STATISTICS,
      loan_Statistics_data: Data[0],
      loan_Statistics_details: Data[1]
    });
  } catch (error) {
    console.log("Error is _updateLoan : ", error);
  }
};
