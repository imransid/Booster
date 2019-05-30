import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gauge: {
      position: 'absolute',
      width: 140,
      height: 150,
      color: "red",
      alignItems: "center",
      justifyContent: "center"
    },
    gaugeText: {
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: 24,
    },
    gaugeTextdis: {
        backgroundColor: 'transparent',
        color: '#fff',
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
    TransectionCardHeaderText : {
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
        color: "#fff", 
        fontSize: 20
    }
});

export default styles;
