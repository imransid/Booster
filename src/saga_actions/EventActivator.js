import { takeEvery, select, call, put } from "redux-saga/effects";
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from "../constant/constant";

export async function _loadMCMDetailsDB() {
  try {
    const data = await AsyncStorage.getItem("MCM@all@Data");
    let data_load;
    if (data !== null) {
      data_load = JSON.parse(data);
    } else {
      data_load = [];
    }
    return data_load;
  } catch (error) {
    console.log("async retrive prlm loadMCMDetails : ", error);
  }
}

export const loadMCMDetails = function*(action) {
  const retive_data = yield call(_loadMCMDetailsDB);

  console.log("retive_data", retive_data);

  yield put({
    type: actionType.LOADED_MCM_DB,
    loaded_data: retive_data
  });
};
