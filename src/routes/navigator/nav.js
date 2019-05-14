import React, {Component} from "react";
import { Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LOGIN from '../../components/Login/Login';
import REGISTER from "../../components/Register/Register";
import WALLET from "../../components/Wallet/Wallet";
import CONVERT from "../../components/Converter/Converter";

// class Hidden extends React.Component {
//   render() {
//     return null;
//   }
// }


export default class nav extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth : WIDTH * 0.83,
}

const DrawerNavigator = createDrawerNavigator(
  {

    REGISTER : {
      screen : REGISTER
    },
    LOGIN : {
      screen : LOGIN
    },
    WALLET : {
      screen : WALLET
    },
    CONVERT : {
      screen : CONVERT
    }


  },
  DrawerConfig
);

const AppContainer = createAppContainer(DrawerNavigator);