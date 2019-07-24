import React, {Component} from "react";
import { Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LOGIN from '../../components/Login/Login';
import REGISTER from "../../components/Register/Register";
import WALLET from "../../components/Wallet/Wallet";
import CONVERT from "../../components/Converter/Converter";
import SideDrawer from "../../components/Menu/MenuDrawer";
import ADD_TRANSECTIONS from "../../components/Wallet/Transection/AddNewTransectios";
import RATE from "../../components/Rate/Rate";
import ADD_WALLET from "../../components/Wallet/AddWallet/AddNewWallet";
import TRANSECTIONS_EDIT from '../../components/Wallet/Transection/Transections_edit'
import History from '../../components/Wallet/History/History'

export default class nav extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  initialRouteName: 'WALLET',
  drawerWidth : WIDTH * 0.83,
  contentComponent : ({ navigation }) => {
    return(<SideDrawer props={navigation} />)
  }
}

const HOME = createStackNavigator({

  WALLET: {
    screen : WALLET
  },
  TRANSECTIONS_EDIT: {
    screen: TRANSECTIONS_EDIT
  },
  ADD_TRANSECTIONS: {
    screen: ADD_TRANSECTIONS
  },
  ADD_WALLET: {
    screen: ADD_WALLET
  },
  History: {
    screen: History 
  }

},
{
 headerMode : 'none',
 initialRouteName: "WALLET"
}
)

const DrawerNavigator = createDrawerNavigator(
  {
    RATE : {
      screen: RATE
    },
    WALLET : {
      screen : HOME
    },
    LOGIN : {
      screen : LOGIN
    },
    REGISTER : {
      screen : REGISTER
    },
    CONVERT : {
      screen : CONVERT
    },
    


  },
   DrawerConfig,
  
);

const AppContainer = createAppContainer(DrawerNavigator);