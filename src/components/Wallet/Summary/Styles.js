import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Summary_content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#DBDBDB",
    padding: 15
  },
  Summary_card: {
    height: 270,
    padding: 15
  },
  Summary_card_1st_Row: {
    height: 40
  },
  Summary_card_1st_Row_date: {
    textAlign: "right",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "bold",
    color: "#00000F"
  },
  Summary_card_1st_Row_Head: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "bold",
    color: "#206BCA"
  },
  Summary_card_Image: {
    width: "103%", //350,
    height: "95%", //70
    padding: 10
  },
  Summary_card_Image_Text_1: {
    fontWeight: "bold",
    width: 120,
    color: "#FFFFFF"
  },
  Summary_card_Image_Text_2: {
    color: "#FFF"
  },
  Summary_card_3rd_Row_1_Text: { color: "#000", width: 90 },
  Summary_card_3rd_Row_2_Text: {},
  Summary_card_3rd_Row_3_Text: {
    color: "#D4485C",
    width: "100%",
    textAlign: "right"
  },
  Summary_card_3rd_Row_4_Text: {
    color: "#000",
    width: "100%",
    textAlign: "right"
  },
  Summary_card_last_row: {
    height: 30
  },
  Summary_card_last_row_text: {
    color: "#2779C7",
    width: 90
  }
});

export default styles;
