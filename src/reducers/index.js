import { combineReducers } from "redux";

import audit from "./audit";
import CONVERTER from "./Converter";
import TRASECTION from "./Transection";
import HISTORY from "./History";
import SETTING from "./Setting";
import SUMMARY from "./Summary";

export default combineReducers({
  audit,
  CONVERTER,
  TRASECTION,
  HISTORY,
  SETTING,
  SUMMARY
});
