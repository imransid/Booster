import { call, put } from "redux-saga/effects";
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from "../constant/constant";
import { retrieveWalletCard } from "./All_Data_Wallet";

import { IniTial_App_Data, Value_Data_Gen } from "./extre_summary";

async function _retrieveTransection() {
  try {
    const data = await AsyncStorage.getItem("transection@Data");
    let data_load;

    if (data !== null) {
      data_load = JSON.parse(data);
    } else {
      data_load = [];
    }

    return data_load;
  } catch (error) {
    console.log("Summary Error: Transection not loaded", error);
  }
}

const _data_Genarate = (wallet, tran, bank_code, wallet_id, val) => {
  let Return_array;
  if (wallet.length !== 0) {
    // initial data
    if (wallet.length == 1) {
      wallet[0].bank_code == "Initial Card"
        ? (Return_array = IniTial_App_Data(val))
        : (Return_array = Value_Data_Gen(
            wallet,
            tran,
            bank_code,
            wallet_id,
            val
          ));
    } else {
      Return_array = Value_Data_Gen(wallet, tran, bank_code, wallet_id, val);
    }
  } else {
    // waller have no Data
    console.log("--------> Wallet Have No Data <------");
  }
  return Return_array;
};

const _today_Data_Genarate = async (wallet, tran, bank_code, wallet_id) => {
  try {
    let Return_array,
      val = "T_D";

    Return_array = _data_Genarate(wallet, tran, bank_code, wallet_id, val);

    return Return_array;
  } catch (error) {
    console.log("-----> Error in _today_Data_Genarate Method <------", error);
  }
};

const _weekly_Data_Genarate = async (wallet, tran, bank_code, wallet_id) => {
  try {
    let Return_array,
      val = "T_W";

    Return_array = _data_Genarate(wallet, tran, bank_code, wallet_id, val);

    return Return_array;
  } catch (error) {
    console.log("-----> Error in _weekly_Data_Genarate Method <------", error);
  }
};

const _month_Data_Genarate = async (wallet, tran, bank_code, wallet_id) => {
  try {
    let Return_array,
      val = "T_M";

    Return_array = _data_Genarate(wallet, tran, bank_code, wallet_id, val);

    return Return_array;
  } catch (error) {
    console.log("-----> Error in _month_Data_Genarate Method <------", error);
  }
};

const _year_Data_Genarate = async (wallet, tran, bank_code, wallet_id) => {
  try {
    let Return_array,
      val = "T_Y";

    Return_array = _data_Genarate(wallet, tran, bank_code, wallet_id, val);

    return Return_array;
  } catch (error) {
    console.log("-----> Error in _year_Data_Genarate Method <------", error);
  }
};

export const SummaryGenarator = function*(action) {
  const retive_Wallet = yield call(retrieveWalletCard);
  const retive_Transection = yield call(_retrieveTransection);
  let bank_code,
    wallet_id,
    Transection = [],
    Wallet = [];

  if (retive_Wallet.length == undefined) {
    Wallet.push(retive_Wallet);
  } else {
    Wallet = retive_Wallet;
  }

  if (action.chker == "init") {
    (bank_code = Wallet[0].bank_code), (wallet_id = Wallet[0].wallet_id);
  }

  if (retive_Transection.length == undefined) {
    Transection.push(retive_Transection);
  } else {
    Transection = retive_Transection;
  }

  const Today_data_genarate = yield call(
    _today_Data_Genarate,
    Wallet,
    Transection,
    bank_code,
    wallet_id
  );

  const Weekly_data_genarate = yield call(
    _weekly_Data_Genarate,
    Wallet,
    Transection,
    bank_code,
    wallet_id
  );

  const Month_data_genarate = yield call(
    _month_Data_Genarate,
    Wallet,
    Transection,
    bank_code,
    wallet_id
  );

  const Year_data_genarate = yield call(
    _year_Data_Genarate,
    Wallet,
    Transection,
    bank_code,
    wallet_id
  );

  yield put({
    type: actionType.SUMMARY_DATA_LOAD,
    today_data: Today_data_genarate,
    weekly_data: Weekly_data_genarate,
    month_data: Month_data_genarate,
    year_data: Year_data_genarate,
    loader: false
  });
};

// Single Day Data Load

export const SummaryToday = function*(action) {
  try {
    const retive_Wallet = yield call(retrieveWalletCard);
    const retive_Transection = yield call(_retrieveTransection);
    let bank_code = action.bank_code,
      wallet_id = action.wallet_id,
      Transection = [],
      Wallet = [];

    if (retive_Wallet.length == undefined) {
      Wallet.push(retive_Wallet);
    } else {
      Wallet = retive_Wallet;
    }

    if (retive_Transection.length == undefined) {
      Transection.push(retive_Transection);
    } else {
      Transection = retive_Transection;
    }

    const Today_data_genarate = yield call(
      _today_Data_Genarate,
      Wallet,
      Transection,
      bank_code,
      wallet_id
    );

    yield put({
      type: actionType.SUMMARY_TODAY_LOAD,
      today_data: Today_data_genarate,
      loader: false
    });
  } catch (error) {
    console.log("--->Error is SummaryToday<---", error);
  }
};

// Single Week Data Load
export const SummaryWeek = function*(action) {
  try {
    const retive_Wallet = yield call(retrieveWalletCard);
    const retive_Transection = yield call(_retrieveTransection);
    let bank_code = action.bank_code,
      wallet_id = action.wallet_id,
      Transection = [],
      Wallet = [];

    if (retive_Wallet.length == undefined) {
      Wallet.push(retive_Wallet);
    } else {
      Wallet = retive_Wallet;
    }

    if (retive_Transection.length == undefined) {
      Transection.push(retive_Transection);
    } else {
      Transection = retive_Transection;
    }

    const Weekly_data_genarate = yield call(
      _weekly_Data_Genarate,
      Wallet,
      Transection,
      bank_code,
      wallet_id
    );

    yield put({
      type: actionType.SUMMARY_WEEK_LOAD,
      weekly_data: Weekly_data_genarate,
      loader: false
    });
  } catch (error) {
    console.log("--->Error is SummaryWeek<---", error);
  }
};

// Single Month Data Load
export const Summary_Month_Now = function*(action) {
  try {
    const retive_Wallet = yield call(retrieveWalletCard);
    const retive_Transection = yield call(_retrieveTransection);
    let bank_code = action.bank_code,
      wallet_id = action.wallet_id,
      Transection = [],
      Wallet = [];

    if (retive_Wallet.length == undefined) {
      Wallet.push(retive_Wallet);
    } else {
      Wallet = retive_Wallet;
    }

    if (retive_Transection.length == undefined) {
      Transection.push(retive_Transection);
    } else {
      Transection = retive_Transection;
    }

    const Month_data_genarate = yield call(
      _month_Data_Genarate,
      Wallet,
      Transection,
      bank_code,
      wallet_id
    );

    yield put({
      type: actionType.SUMMARY_MONTH_LOAD,
      month_data: Month_data_genarate,
      loader: false
    });
  } catch (error) {
    console.log("--->Error is Summary_Month_Now<---", error);
  }
};

// Single Year Data Load
export const Summary_Year_Now = function*(action) {
  try {
    const retive_Wallet = yield call(retrieveWalletCard);
    const retive_Transection = yield call(_retrieveTransection);
    let bank_code = action.bank_code,
      wallet_id = action.wallet_id,
      Transection = [],
      Wallet = [];

    if (retive_Wallet.length == undefined) {
      Wallet.push(retive_Wallet);
    } else {
      Wallet = retive_Wallet;
    }

    if (retive_Transection.length == undefined) {
      Transection.push(retive_Transection);
    } else {
      Transection = retive_Transection;
    }

    const Year_data_genarate = yield call(
      _year_Data_Genarate,
      Wallet,
      Transection,
      bank_code,
      wallet_id
    );

    yield put({
      type: actionType.SUMMARY_YEAR_LOAD,
      year_data: Year_data_genarate,
      loader: false
    });
  } catch (error) {
    console.log("--->Error is Summary_Year_Now<---", error);
  }
};
