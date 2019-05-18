import React, {Component} from "react";
import { Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LOGIN from '../../components/Login/Login';
import REGISTER from "../../components/Register/Register";
import WALLET from "../../components/Wallet/Wallet";
import CONVERT from "../../components/Converter/Converter";
import SideDrawer from "../../components/Menu/MenuDrawer";

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
  contentComponent : ({ navigation }) => {
    return(<SideDrawer props={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {

    WALLET : {
      screen : WALLET
    },
    LOGIN : {
      screen : LOGIN
    },
    REGISTER : {
      screen : REGISTER
    },
    CONVERT : {
      screen : CONVERT
    }


  },
  DrawerConfig,
  
);

const AppContainer = createAppContainer(DrawerNavigator);