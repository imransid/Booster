import React, {Component} from "react";
import {TouchableHighlight, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class DrawerButtons extends Component{

    render(){
        return(
            <Icon 
            name="align-justify" 
            size={30} 
            color="#0091EA" 
            onPress={() => this.props.navigation.toggleDrawer()}/>
            
        )
    }

}


export default DrawerButtons;

