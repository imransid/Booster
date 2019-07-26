import React, {Component} from "react";
import { View, TouchableOpacity } from "react-native";
import {Label} from 'native-base';
import WALLETICON from 'react-native-vector-icons/MaterialIcons';
import WALLETCHAT from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './../Styles';

export default class CustomFooter extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: "#282929", width: "100%"}}>
                <View style={{alignContent: "center", width: "100%", flexDirection: "row",marginLeft: 20, paddingTop: 10, justifyContent: "space-between"}}>
                <TouchableOpacity style={Styles.footerIcon}>
                                        <WALLETICON 
                                            name="account-balance-wallet" 
                                            size={25} 
                                            color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.footerIcon}>
                                        <WALLETICON 
                                            name="event-note" 
                                            size={25} 
                                            color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.footerIcon}>
                                        <WALLETCHAT 
                                            name="chart-line-variant" 
                                            size={25} 
                                            color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.footerIcon}>
                                        <WALLETICON 
                                            name="history" 
                                            size={25} 
                                            color="#fff"
                                            onPress={() => console.log('props', this.props)}/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.footerIcon}>
                                        <WALLETCHAT 
                                            name="bell-plus-outline" 
                                            size={25} 
                                            color="#fff"/>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}