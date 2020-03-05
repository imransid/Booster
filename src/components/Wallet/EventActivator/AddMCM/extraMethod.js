import { AsyncStorage, Alert } from "react-native";
import moment from "moment";

// Today Date
const check = moment(new Date());
const Current_Date = check.format("DD-MM-YYYY");

//save MCM data
const extraMethod = async (props, Catagory, itemname, price, notes) => {
  try {
    if (Catagory == "Select Category" || itemname == "" || price == 0) {
      Alert.alert("! Please Check Again...");
      //   Value is defalut not changed
    } else {
      // Everything is Fine
      const value = await AsyncStorage.getItem("MCM@all@Data");
      let data_load = JSON.parse(value);

      let _data_load = [
        {
          name: itemname,
          catagory: Catagory,
          price: price,
          date: Current_Date,
          notes: notes
        }
      ];

      if (data_load == null) {
        await AsyncStorage.setItem(
          "MCM@all@Data",
          JSON.stringify(_data_load)
        ).then(() => {
          props.navigation.goBack();
        });
      } else {
        data_load.push({
          name: itemname,
          catagory: Catagory,
          price: price,
          date: Current_Date,
          notes: notes
        });
        // OK array add now save in DB
        await AsyncStorage.setItem(
          "MCM@all@Data",
          JSON.stringify(_data_load)
        ).then(() => {
          props.navigation.goBack();
        });
      }
    }
  } catch (error) {
    console.log("extraMethod Erorr is ", error);
  }
};

export default extraMethod;
