import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import LOGIN from "../../components/Login/Login";
import REGISTER from "../../components/Register/Register";

import CONVERT from "../../components/Converter/Converter";
import SideDrawer from "../../components/Menu/MenuDrawer";
import RATE from "../../components/Rate/Rate";

import SETTING from "../../components/setting/Setting";
import { connect } from "react-redux";

import WALLET from "../../components/Wallet/walletHomeScreen";
import LOAN from "../../components/Wallet/EventActivator/LoanCalculator/LoanCalculator";

class nav extends Component {
  render() {
    return this.props.status === false ? <AppContainer /> : <LogAppContainer />;
  }
}

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  initialRouteName: "WALLET",
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <SideDrawer props={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    RATE: {
      screen: RATE
    },
    WALLET: {
      screen: WALLET
    },
    CONVERT: {
      screen: CONVERT
    },
    SETTING: {
      screen: SETTING
    }
  },
  DrawerConfig
);

const AuthStack = createStackNavigator(
  {
    LOGIN: {
      screen: LOGIN
    },
    REGISTER: {
      screen: REGISTER
    }
  },
  {
    headerMode: "none"
  }
);

const LOGGEEDD = createStackNavigator(
  {
    LOGIN: {
      screen: DrawerNavigator
    }
  },
  {
    headerMode: "none"
  }
);

// DrawerNavigator
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      LOGGED: LOGGEEDD
    },
    {
      headerMode: "none",
      initialRouteName: "Auth"
    }
  )
);

const LogAppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      LOGGED: LOGGEEDD
    },
    {
      headerMode: "none",
      initialRouteName: "LOGGED"
    }
  )
);

const mapStateProps = state => {
  return {};
};

export default connect(mapStateProps)(nav);
