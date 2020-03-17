import { AsyncStorage, Alert } from "react-native";
import moment from "moment";

// Today Date
const check = moment(new Date());
const Current_Date = check.format("DD-MM-YYYY");

const _makeid = () => {
  let length = 10;
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const _save_borrow = async (props, itemname, amount, itemdate, note) => {
  try {
    if (itemname == "" || amount == "" || itemdate == "") {
      Alert.alert("! Please Check Again...");
      //   Value is defalut not changed
    } else {
      const check_in = moment(itemdate);
      const ent_Date = check_in.format("DD-MM-YYYY");

      // Everything is Fine
      const value = await AsyncStorage.getItem("BORROW@all@Data");
      let data_load = JSON.parse(value);

      let _data_load = [
        {
          name: itemname,
          amount: amount,
          return_date: ent_Date,
          date: Current_Date,
          note: note,
          status: true,
          id: _makeid(),
          commments: ""
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
          return_date: ent_Date,
          date: Current_Date,
          note: note,
          status: true,
          id: _makeid(),
          commments: ""
        });

        // OK array add now save in DB
        await AsyncStorage.setItem(
          "BORROW@all@Data",
          JSON.stringify(data_load)
        ).then(() => {
          props.navigation.navigate("borrow_lending");
        });
      }
    }
  } catch (error) {
    console.log("Error is _save_borrow : ", error);
  }
};

const _array_update = info => {
  try {
    let _data = info;
    if (info.return_date == Current_Date) {
      (_data.commments = "good"), (_data.status = false);
    } else {
      var startDate = moment(info.return_date, "DD-MM-YYYY");
      var endDate = moment(Current_Date, "DD-MM-YYYY");

      endDate > startDate
        ? ((_data.commments = "best"), (_data.status = false))
        : ((_data.commments = "bad"), (_data.status = false));
    }

    return _data;
  } catch (error) {
    console.log("error is _array_update ", error);
  }
};

export const _update_borrow = async (data, props) => {
  try {
    const value = await AsyncStorage.getItem("BORROW@all@Data");
    let data_load = JSON.parse(value);

    let array_update = data_load.map(e =>
      e.id == data.id ? _array_update(e) : e
    );

    await AsyncStorage.setItem(
      "BORROW@all@Data",
      JSON.stringify(array_update)
    ).then(() => {
      props.navigation.navigate("borrow_lending");
    });
  } catch (error) {
    console.log("Error is _update_borrow : ", error);
  }
};
