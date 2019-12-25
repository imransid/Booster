import { call, put } from "redux-saga/effects";
import actionType from "../constant/constant";

export const customNavigationUpdater = function*(action) {
  try {
    yield put({
      type: actionType.CUSNAVLOAD,
      nav: action.nav
    });
  } catch (error) {
    console.log("ERROR is Now customNavigationUpdater : ", error);
  }
};
