import { AsyncStorage, Alert } from "react-native";
import moment from "moment";

// Today Date
const check = moment(new Date());
const Current_Date = check.format("DD-MM-YYYY");

export const _save_borrow = async (props, itemname, amount, itemdate, note) => {
  try {
    if (itemname == "" || amount == "" || itemdate == "") {
      Alert.alert("! Please Check Again...");
      //   Value is defalut not changed
    } else {
      // Everything is Fine
      const value = await AsyncStorage.getItem("BORROW@all@Data");
      let data_load = JSON.parse(value);

      console.log("data_load", data_load);

      let _data_load = [
        {
          name: itemname,
          amount: amount,
          return_date: itemdate,
          date: Current_Date,
          note: note,
          status: true
        }
      ];

      if (data_load == null) {
        await AsyncStorage.setItem(
          "BORROW@all@Data",
          JSON.stringify(_data_load)
        ).then(() => {
          props.navigation.goBack();
        });
      } else {
        data_load.push({
          name: itemname,
          amount: amount,
          return_date: itemdate,
          date: Current_Date,
          note: note,
          status: true
        });

        // OK array add now save in DB
        await AsyncStorage.setItem(
          "BORROW@all@Data",
          JSON.stringify(data_load)
        ).then(() => {
          props.navigation.goBack();
        });
      }
    }
  } catch (error) {
    console.log("Error is _save_borrow : ", error);
  }
};
