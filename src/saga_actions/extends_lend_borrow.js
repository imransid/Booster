import { AsyncStorage, Alert } from "react-native";
import moment from "moment";

var currMonthName = moment().format("MM");

export async function _loadBorroewDB(name) {
  try {
    let data;
    name == "Lend"
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

// Save Total Lend or Borrow
export async function _SaveBorroewDB(name, info) {
  try {
    let _result;
    name == "Lend"
      ? (_result = await AsyncStorage.setItem(
          "LEND@all@Data",
          JSON.stringify(info)
        ).then(() => true))
      : (_result = await AsyncStorage.setItem(
          "BORROW@all@Data",
          JSON.stringify(info)
        ).then(() => true));

    return _result;
  } catch (error) {
    console.log("async Save prlm _SaveBorroewDB : ", error);
  }
}

// Total  OverView Lend or Borrow and pid and remining status
export async function _OverView(name, remaining) {
  try {
    let result = 0,
      paid = 0,
      data,
      data_load;

    name == "Lend"
      ? (data = await AsyncStorage.getItem("LEND@all@Data"))
      : (data = await AsyncStorage.getItem("BORROW@all@Data"));

    if (data !== null) {
      data_load = JSON.parse(data);
      if (data_load.length !== 0) {
        data_load.map((e) =>
          parseInt(e.return_date.slice(3, 5)) === parseInt(currMonthName)
            ? (result = parseInt(e.amount) + result)
            : null
        );
      }
    }

    paid = parseInt(result) - parseInt(remaining);

    return [result, paid, remaining];
  } catch (error) {
    console.log("async Save prlm _OverView : ", error);
  }
}

// Load Total Lend or Borrow Amount
export async function _loadTotalAmount(name) {
  try {
    let data = await AsyncStorage.getItem(name);

    let data_load = 0;
    if (data !== null) {
      let _data = JSON.parse(data);

      if (_data.length !== 0) {
        _data.map((e) =>
          e.status !== false
            ? (data_load = parseInt(e.amount) + data_load)
            : null
        );
      }
    }
    return data_load;
  } catch (err) {
    console.log("Error is ", err);
  }
}

// for Lend active data shows
const _status_Checker = (data) => {
  let _return_data;
  let _result = data.filter((e) => {
    if (e.status == true) {
      return e;
    }
  });

  _result.length == 0 ? (_return_data = []) : (_return_data = _result);

  return _return_data;
};
