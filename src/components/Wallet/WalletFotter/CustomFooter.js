import React, {Component} from "react";
import { View, TouchableOpacity } from "react-native";
import {Label} from 'native-base';
import WALLETICON from 'react-native-vector-icons/MaterialIcons';
import WALLETCHAT from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CustomFooter extends Component{
    render(){
        return(
            <View style={{flexDirection: "row", backgroundColor: "#282929", width: "100%", padding: 5}}>
                                    <TouchableOpacity style={{alignItems: "center", marginLeft: 10}}>
                                        <WALLETICON 
                                            name="account-balance-wallet" 
                                            size={25} 
                                            color="#fff"/>
                                        <Label style={{color: "white"}}>
                                            Wallet
                                        </Label>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{alignItems: "center", marginLeft: 20}}>
                                        <WALLETICON 
                                            name="event-note" 
                                            size={25} 
                                            color="#fff"/>
                                        <Label style={{color: "white"}}>
                                            Summary
                                        </Label>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{alignItems: "center", marginLeft: 20}}>
                                        <WALLETCHAT 
                                            name="chart-line-variant" 
                                            size={25} 
                                            color="#fff"/>
                                        <Label style={{color: "white"}}>
                                            Chart
                                        </Label>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{alignItems: "center", marginLeft: 20}}>
                                        <WALLETICON 
                                            name="history" 
                                            size={25} 
                                            color="#fff"
                                            onPress={() => this.ADD_transection()}/>
                                        <Label style={{color: "white"}}>
                                            History
                                        </Label>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{alignItems: "center", marginLeft: 20}}>
                                        <WALLETCHAT 
                                            name="bell-plus-outline" 
                                            size={25} 
                                            color="#fff"/>
                                        <Label style={{color: "white"}}>
                                            Alert
                                        </Label>
                                    </TouchableOpacity>
            </View>
        )
    }
}