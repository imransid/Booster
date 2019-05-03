import React, {Component} from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Login from '../../components/Login/Login'

export default class nav extends Component{
    render(){
        return(
            <AppNavigator />
        )
    }
}

const AppNavigator = createAppContainer(createStackNavigator({
    LOGIN: {
      screen: Login,
      navigationOptions: {
        header: () => null
      }
    }
  }))


// const MyDrawerNavigator = createDrawerNavigator({
//     Home:{ 
//        screen: Login,
//     }
//   });


//   const MyApp = createAppContainer(MyDrawerNavigator);
