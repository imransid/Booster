import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2
  },
  flex_0_7: {
    flex: 0.7,
    justifyContent: "center",
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2
  },
  FontText: {
    textAlign: "left",
    fontFamily: "Amiko-Bold",
    fontSize: 18,
    color: "#7B1FA2"
  },
  Button_text: {
    textAlign: "center",
    fontFamily: "Amiko-Bold",
    fontSize: 18,
    color: "#FFF"
  },
  Custom_Buttom: {
    backgroundColor: "#7B1FA2",
    width: "40%",
    borderRadius: 10,
    padding: 3
  },
  Custom_Buttom_View: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 7,
    alignItems: "flex-end"
  },
  Custom_Contain: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default styles;
