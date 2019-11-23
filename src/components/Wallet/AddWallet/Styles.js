import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Paddingwidth = Dimensions.get("window").width - 55;
const styles = StyleSheet.create({

    defaultWalletDetailsTextBlock : {
        flexDirection: "row", 
        height: 50, 
        width: '100%', 
        borderBottomColor: '#d3d3d3', 
        borderBottomWidth: 1,
        marginTop: 5,
        paddingTop: 15
    },
    defaultWalletDetailsText : {
        textAlign: 'right', 
        color: "black", 
        fontFamily: 'Raleway', 
        color: "#0000CD"
    },
    defaultButtonaddWallet: {
        borderRadius: 10,
        backgroundColor: '#343EDE',
        height: 40,
        alignItems: 'center',
        width: '70%',
        paddingTop: 8
    },
    ButtonAddWalletText: {
        fontWeight: "900", 
        color: "#FFFFFF",
        fontSize: 16
    },

});

export default styles;
