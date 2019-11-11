import React, {Component} from "react";
import { Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
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
import SETTING from '../../components/setting/Setting';
import { connect } from 'react-redux';

class nav extends Component{

  render(){
        return(
            this.props.status === false ?
              <AppContainer />
            :
              <LogAppContainer />
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
    CONVERT : {
      screen : CONVERT
    },
    SETTING : {
      screen : SETTING
    }
  },
   DrawerConfig,
  
);

const AuthStack = createStackNavigator({
  LOGIN : {
    screen : LOGIN
  },
  REGISTER : {
    screen : REGISTER
  },
},{
  headerMode : 'none',
});

const LOGGEEDD = createStackNavigator({
  LOGIN : {
    screen : DrawerNavigator
  }
},
{
  headerMode : 'none',
});


// DrawerNavigator
const AppContainer = createAppContainer(createSwitchNavigator({
  Auth : AuthStack,
  LOGGED : LOGGEEDD
},
{
  headerMode : 'none',
  initialRouteName: 'Auth'
}
));

const LogAppContainer = createAppContainer(createSwitchNavigator({
  Auth : AuthStack,
  LOGGED : LOGGEEDD
},
{
  headerMode : 'none',
  initialRouteName: 'LOGGED'
}
));


const mapStateProps = (state) => {
  return {
  }
}

export default connect(mapStateProps)(nav)