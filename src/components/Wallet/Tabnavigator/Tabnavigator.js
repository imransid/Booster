import React, { Component } from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import EventActivator from "../EventActivator/index";

import WalletINIT from "../Wallet";

import History from "../History/History";
import Summary from "../Summary/Summary";

import ADD_TRANSECTIONS from "../Transection/AddNewTransectios";
import ADD_WALLET from "../AddWallet/AddNewWallet";
import TRANSECTIONS_EDIT from "../Transection/Transections_edit";
import LOANCALCULATOR from "../EventActivator/LoanCalculator/LoanCalculator";
import MCM from "../EventActivator/MothlyCostManagement/MCM";
import MCM_Details from "../EventActivator/MCMDetails/MCMDetails";
import AddMCM from "../EventActivator/AddMCM/AddMCM";

// LOAN FOR EVENT ACTIVATOR MODULE
import LOAN from "../EventActivator/Loan/Loan";
import LoanStatics from "../EventActivator/LoanStatics/LoanStatics";
// borrow_lending
import borrow_lending from "../EventActivator/Borrowing_Lending/Borrowing_lending";
import borrow from "../EventActivator/Borrowing_Lending/Borrow/Borrow";
import add_borrow_list from "../EventActivator/Borrowing_Lending/Borrow/AddBorrow";
// EMI
import EMI from "../EventActivator/EMI/EMI";

const EVENT_AC = createStackNavigator(
  {
    LOAN: {
      screen: LOAN
    },
    LoanStatics: {
      screen: LoanStatics
    },
    EventActivator: {
      screen: EventActivator
    },
    LOANCALCULATOR: {
      screen: LOANCALCULATOR
    },
    MCM: {
      screen: MCM
    },
    MCM_Details: {
      screen: MCM_Details
    },
    AddMCM: {
      screen: AddMCM
    },
    borrow_lending: {
      screen: borrow_lending
    },
    borrow: {
      screen: borrow
    },
    add_borrow_list: {
      screen: add_borrow_list
    },
    EMI: {
      screen: EMI
    }
  },
  {
    headerMode: "none",
    initialRouteName: "EventActivator"
  }
);

const HOME = createStackNavigator(
  {
    WALLET: {
      screen: WalletINIT
    },
    TRANSECTIONS_EDIT: {
      screen: TRANSECTIONS_EDIT
    },
    ADD_TRANSECTIONS: {
      screen: ADD_TRANSECTIONS
    },
    ADD_WALLET: {
      screen: ADD_WALLET
    }
  },
  {
    headerMode: "none",
    initialRouteName: "WALLET"
  }
);

const Rootnavigator = createBottomTabNavigator(
  {
    EventActivator: {
      screen: EVENT_AC,
      navigationOptions: {
        tabBarIcon: <Icon name="bank" size={22} color="#FFFFFF" />
      }
    },

    WALLET: {
      screen: HOME,
      navigationOptions: {
        tabBarIcon: (
          <Image
            source={require("../../../assets/icons/icon-wallet.png")}
            style={{ height: 22, width: 22 }}
          />
        )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: <Icon name="history" size={22} color="#FFFFFF" />
      }
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        tabBarIcon: (
          <Image
            source={require("../../../assets/icons/icon-summary.png")}
            style={{ height: 22, width: 22 }}
          />
        )
      }
    }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#4527A0",
      inactiveTintColor: "gray",
      inactiveBackgroundColor: "#4527A0"
    },
    initialRouteName: "WALLET"
  }
);

const App = createAppContainer(Rootnavigator);
export default App;
