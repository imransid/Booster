import { AsyncStorage } from "react-native";
import { call, put } from "redux-saga/effects";
import { _makeid } from "./extends_emi";

export async function Retrive_DB_Loan() {
  try {
    const data = await AsyncStorage.getItem("LOAN@DATA");

    if (data !== null) {
      let data_load = JSON.parse(data);

      return data_load;
    } else {
      return [];
    }
  } catch (error) {
    console.log("--->Error is Retrive_DB_Loan<---", error);
  }
}

export const Add_Loan_DB = function*(action) {
  try {
    const LOAN_ID = yield call(_makeid);
    let SAVE_DATA = [];
    let row_data = {
      id: LOAN_ID,
      amount: action.amount,
      description: action.description,
      itemdate: action.itemdate,
      loanTitle: action.loanTitle,
      loan_catgory: action.loan_catgory,
      paidInstallment: action.paidInstallment,
      selectBank: action.selectBank,
      selectYear: action.selectYear,
      interest: action.interest,
      monthly_amount: action.monthly_amount
    };
    const Loan_Data = yield call(Retrive_DB_Loan);

    if (Loan_Data.length == 0) {
      SAVE_DATA.push(row_data);
    } else {
      SAVE_DATA = Loan_Data;
      SAVE_DATA.push(row_data);
    }

    const SAve_DB_Data = yield call(Setter_DB_Loan, SAVE_DATA);

    if (SAve_DB_Data == true) {
      return SAVE_DATA;
    }
  } catch (error) {
    console.log("---> Error is Add_Loan_DB <---", error);
  }
};

export async function Setter_DB_Loan(info) {
  try {
    const data = AsyncStorage.setItem("LOAN@DATA", JSON.stringify(info)).then(
      () => {
        //  update new value succcessfully
        return true;
      }
    );

    return data;
  } catch (error) {
    console.log("--->Error is Setter_DB_Loan<---", error);
  }
}

export const _Update_LOAN = function*(action) {
  try {
    const Data = yield call(Retrive_DB_Loan);
    let result;

    Data.map(e =>
      e.id == action.id
        ? (e.paidInstallment = parseInt(e.paidInstallment) + 1)
        : null
    );

    const SAve_DB_Data = yield call(Setter_DB_Loan, Data);

    Data.map(e => (e.id == action.id ? (result = e) : null));

    const DateCreator = yield call(
      _DateCreator,
      parseInt(result.paidInstallment),
      result.itemdate,
      result.selectYear,
      result.monthly_amount
    );

    return [result, DateCreator];
  } catch (error) {
    console.log("---> Error is _Update_LOAN <---", error);
  }
};

export const _load_statistics_DB = function*(action) {
  try {
    const Data = yield call(Retrive_DB_Loan);
    let result;

    Data.map(e => (e.id == action.id ? (result = e) : null));

    const DateCreator = yield call(
      _DateCreator,
      parseInt(result.paidInstallment),
      result.itemdate,
      result.selectYear,
      result.monthly_amount
    );

    return [result, DateCreator];
  } catch (error) {
    console.log("---> Error is _load_statistics_DB <---", error);
  }
};

export async function _DateCreator(I_NO, date, time, amount) {
  try {
    let Time = time.slice(0, -5);
    let month = parseInt(Time) * 12;
    let data = [];

    let start_month, start_year, simple_fixed_date;

    simple_fixed_date = parseInt(date.slice(0, -8));

    start_month = parseInt(date.slice(3, -5));

    start_year = parseInt(date.slice(6));

    for (let i = 1; i <= month; i++) {
      let dateIs = simple_fixed_date + "/" + start_month + "/" + start_year;
      let _status = I_NO == 0 ? "pending" : I_NO < i ? "pending" : "paid";
      let info = {
        installment_no: i,
        payment_date: dateIs,
        maounty_amount: amount,
        status: _status
      };
      start_month == 12 ? (start_month = 1) : start_month++;
      start_month == 12 ? start_year++ : start_year;
      data.push(info);
    }

    return data;
  } catch (error) {
    console.log("--->Error is _DateCreator <---", error);
  }
}
