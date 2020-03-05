import { combineReducers } from "redux";

import audit from "./audit";
import CONVERTER from "./Converter";
import TRASECTION from "./Transection";
import HISTORY from "./History";
import SETTING from "./Setting";
import SUMMARY from "./Summary";
import EVENT_AC from "./EventActivator";

export default combineReducers({
  audit,
  CONVERTER,
  TRASECTION,
  HISTORY,
  SETTING,
  SUMMARY,
  EVENT_AC
});
