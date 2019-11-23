import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Paddingwidth = Dimensions.get("window").width - 55;
const styles = StyleSheet.create({
  
    footerIcon: {
        marginRight: '5%'
    },
    footerIcon1: {
        alignItems: "center",
        marginLeft: 35,
        marginTop:5
    },
    buttonPress:{
        backgroundColor: "#5426AF", 
        height: "100%", 
        width: "100%", 
        borderRadius: 7
    },
    buttonPressTextColor:{
        color: '#FFFFFF'
    },
    buttonTextColoris:{
        color: '#591FAC'
    },
    button:{
        backgroundColor: "#FFFFFF", 
        height: "100%", 
        width: "100%", 
        borderRadius: 7,
        borderColor: "#5426AF",
        borderWidth: 2
    },
    defaultWalletContet: {
        backgroundColor: "#FFFFFF"
    },
    defaultHeader: {
        alignContent: "stretch", 
        backgroundColor: '#FFFFFF'
    },
    defaultHeaderView: {
        flexDirection: "row", 
        width: "100%", 
        paddingTop: 15
    },
    defaultHeaderLabel: {
        marginLeft: 30, 
        color: "#000000", 
        fontSize: 20
    },
    defaultHeaderBlock : {
        height: 320, 
        backgroundColor: "#FFFFFF"
    },
    defaultHeaderBlockCard: {
        backgroundColor : "#FFFFFF", 
        height: 50, 
        borderColor: "#FFFFFF"
    },
    walletHomeHeight: {
        width: '100%'
    },
    walletHomeTabBlock: {
        width: "50%", 
        height: "100%", 
        alignItems: "center"
    }
});

export default styles;
