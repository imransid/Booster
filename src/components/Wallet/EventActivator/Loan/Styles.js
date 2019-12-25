import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Paddingwidth = Dimensions.get("window").width - 55;
const styles = StyleSheet.create({
  bank_scroll: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    height: 140
  },
  footerCus: {
    backgroundColor: "#FFFFFF",
    height: 80,
    padding: 10
  },
  input_Item_Cus: {
    borderColor: "#D3D3D3",
    borderWidth: 1
  },
  input_Item: {
    marginBottom: 10,
    borderColor: "#FFFFFF"
  }
});

export default styles;
