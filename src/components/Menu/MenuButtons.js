import React, {Component} from "react";
import {TouchableHighlight, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class DrawerButtons extends Component{

    render(){
        return(
            <Icon 
            name="bars" 
            size={30} 
            color="#fff" 
            onPress={() => this.props.navigation.toggleDrawer()}/>
            
        )
    }

}


export default DrawerButtons;

