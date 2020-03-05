import { takeEvery, select, call, put } from "redux-saga/effects";
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from "../constant/constant";

export async function _loadMCMDetailsDB() {
  try {
    console.log("OK Working Plan");
    // const data = await AsyncStorage.getItem("wallet@Card");
    // let data_load;
    // if (data !== null) {
    //   data_load = JSON.parse(data);
    // } else {
    //   data_load = [];
    // }
    // return data_load;
  } catch (error) {
    console.log("async retrive prlm loadMCMDetails : ", error);
  }
}

export const loadMCMDetails = function*(action) {
  const retive_data = yield call(_loadMCMDetailsDB);

  //yield put({ type: actionType.TRANSECTION_RESULT, result: retive_data })
};
