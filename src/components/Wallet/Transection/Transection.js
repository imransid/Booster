import React, {Component} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import WALLETICON from 'react-native-vector-icons/MaterialIcons';
import ICONTRANSPORT from 'react-native-vector-icons/Ionicons';
import ICONMETSHOP from 'react-native-vector-icons/MaterialCommunityIcons';
import ICONOCTGIFT from 'react-native-vector-icons/Octicons';
import {Label, Card} from 'native-base';



export default class Transection extends Component{
    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>
                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: "#3ACDFC", borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                <ICONTRANSPORT 
                                    name="md-car" 
                                    size={35} 
                                    color="#fff"/>
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                Ubar
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                Dec, 11, 2017
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                $ 21
                            </Label>
                        </View>
                    </View>
                </Card>

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: "#808000", borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                <ICONMETSHOP 
                                    name="shopify" 
                                    size={35} 
                                    color="#fff"/>
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                Shoping
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                Dec, 11, 2019
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                $ 521
                            </Label>
                        </View>
                    </View>
                </Card>

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: "#006727", borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                <ICONMETSHOP 
                                    name="food" 
                                    size={35} 
                                    color="#fff"/>
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                Dinner
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                Dec, 05, 2019
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                $ 51
                            </Label>
                        </View>
                    </View>
                </Card>

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: "#3ACDFC", borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                <ICONTRANSPORT 
                                    name="md-car" 
                                    size={35} 
                                    color="#fff"/>
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                Ubar
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                Dec, 1, 2018
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                $ 31
                            </Label>
                        </View>
                    </View>
                </Card>

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: "#F81894", borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                <ICONOCTGIFT 
                                    name="gift" 
                                    size={35} 
                                    color="#fff"/>
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                Gift
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                Dec, 09, 201
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                $ 17
                            </Label>
                        </View>
                    </View>
                </Card>

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <Label>ONE</Label>
                </Card>
                
            </ScrollView>
            
        )
    }
}