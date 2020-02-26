import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  CardTextSyle: {
    height: 50,
    width: "50%",
    padding: 15,
    alignItems: "flex-start"
  },
  CardText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000"
  },
  CardBlockSyle: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    height: 55,
    borderRadius: 1,
    borderColor: "#000",
    borderWidth: 2
  },
  gauge: {
    position: "absolute",
    width: 140,
    height: 150,
    color: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 24
  },
  gaugeTextdis: {
    backgroundColor: "transparent",
    color: "#fff"
  },
  saveTransectionCard: {
    backgroundColor: "#171818",
    height: 60
  },
  saveTransectionButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20
  },
  saveTransectionButton: {
    height: "100%"
  },
  TransectionCardHeaderText: {
    color: "gray",
    fontSize: 21
  },
  DescriptionInputView: {
    paddingLeft: 20,
    width: "100%",
    height: "70%"
  },
  DescriptionInputBox: {
    width: "100%",
    color: "#313BDD",
    fontSize: 20
  },

  // Wallet Button
  ButtonAddTransectionText: {
    fontWeight: "900",
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
    width: 130
  },

  /// transection

  defaultButtonTransection: {
    borderRadius: 10,
    backgroundColor: "#343EDE",
    height: 40,
    alignItems: "center",
    width: "80%",
    paddingTop: 8
  }
});

export default styles;
