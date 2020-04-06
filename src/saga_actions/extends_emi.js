import { AsyncStorage, ToastAndroid } from "react-native";
import { takeEvery, select, call, put } from "redux-saga/effects";
import { retrieveWalletCard } from "./All_Data_Wallet";
import actionType from "../constant/constant";
// Load EMI DB
export async function _loadEMIDB() {
  try {
    const data = await AsyncStorage.getItem("EMI@Data");
    let data_load;

    if (data !== null) {
      data_load = JSON.parse(data);
    } else {
      data_load = [];
    }

    return data_load;
  } catch (error) {
    console.log("Error is _loadEMIDB : ", error);
  }
}

// Update Wallet
const _walletUpdate = function*(amount, card_id) {
  try {
    const wallet_data = yield call(retrieveWalletCard);

    wallet_data.map(e =>
      e.card_num == card_id
        ? ((e.avalible_balance = e.avalible_balance - amount),
          (e.balance = e.balance - amount))
        : e
    );

    yield call(_WalletSETTER, wallet_data);
  } catch (error) {
    console.log("Error is _walletUpdate : ", error);
  }
};

export const _add_emi = function*(action) {
  try {
    let total_month = parseInt(action.months.slice(0, 2));
    let payable_month = parseInt(action.months.slice(0, 2));
    let monthly_bill = parseInt(action.amount) / payable_month;

    const EMI_ID = yield call(_makeid);

    let data = {
      amount: action.amount,
      card_name: action.card_name,
      months: action.months,
      note: action.note,
      title: action.title,
      status: "active",
      total_month: total_month,
      payable_month: payable_month,
      monthly_bill: monthly_bill,
      emi_id: EMI_ID
    };

    const EMI_Data = yield call(_loadEMIDB);

    EMI_Data.push(data);

    const WalletUpdate = yield call(
      _walletUpdate,
      action.amount,
      action.card_id
    );

    const EMIUpdate = yield call(_EMISETTER, EMI_Data);

    return EMI_Data;
  } catch (error) {
    console.log("Error is _add_emi : ", error);
  }
};

// SET wallet value
async function _WalletSETTER(info) {
  try {
    const data = await AsyncStorage.setItem(
      "wallet@Card",
      JSON.stringify(info)
    );
  } catch (error) {
    console.log("Error is _WalletSETTER : ", error);
  }
}

// SET EMI value
async function _EMISETTER(info) {
  try {
    const data = await AsyncStorage.setItem("EMI@Data", JSON.stringify(info));
  } catch (error) {
    console.log("Error is _EMISETTER : ", error);
  }
}

export async function _StaTusChecker(data) {
  let retun_data = data.filter(e => {
    if (e.status == "active") {
      return e;
    }
  });

  return retun_data;
}

async function _makeid() {
  var length = 10;
  var result = "";
  var characters =
    "EMIEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const _UpdateEMIDB = function*(action) {
  try {
    const EMI_Data = yield call(_loadEMIDB);

    const Update_Info = yield call(_arrayMixer, EMI_Data, action.emi_id);

    const EMIUpdate = yield call(_EMISETTER, Update_Info);

    return Update_Info;
  } catch (error) {
    console.log("ERROR IS _UpdateEMIDB : ", error);
  }
};

async function _arrayMixer(arr_ay, id) {
  let data = arr_ay.filter(e => {
    if (e.emi_id == id) {
      if (e.payable_month == 1) {
        e.status = "inactive";
        e.payable_month = e.payable_month - 1;
      } else {
        e.payable_month = e.payable_month - 1;
      }
    }

    return e;
  });

  return data;
}
