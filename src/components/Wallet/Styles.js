import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Paddingwidth = Dimensions.get("window").width - 55;
const styles = StyleSheet.create({
  
    footerIcon: {
  
        alignItems: "center",
        marginLeft: 50,
        
        marginTop:7
    },

    footerIcon1: {
  
        alignItems: "center",
        marginLeft: 35,
        marginTop:5
    },

    buttonPress:{
        backgroundColor: "#3ACDFC" , height: "100%", width: "100%", borderRadius: 7
    },
    button:{
        backgroundColor: "#171818" , height: "100%", width: "100%", borderRadius: 7

    }
   
});

export default styles;
