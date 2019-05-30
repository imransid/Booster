import React, {Component} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import MI from 'react-native-vector-icons/MaterialIcons';
import IC from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'react-native-vector-icons/Octicons';
import {Label, Card} from 'native-base';


const ICONPROVIDER = (props) => {

    
    if(props.IconGenarater == "MCI"){
        return(
            <MCI 
                name= { props.iconName } 
                size={35} 
                color="#fff"/>
        )
    } else if(props.IconGenarater == "MI"){
        return(
            <MI 
                name= { props.iconName } 
                size={35} 
                color="#fff"/>
        )
    } else if(props.IconGenarater == "OC"){
        return(
            <OC 
                name= { props.iconName } 
                size={35} 
                color="#fff"/>
        )
    } else if(props.IconGenarater == "IC"){
        return(
            <IC 
                name= { props.iconName } 
                size={35} 
                color="#fff"/>
        )
    }
}

const CustomCard = (props) => {
    return(
        <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <View style={{flexDirection: "row", width: "100%", height: "100%", paddingTop: 15}}>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <View style={{backgroundColor: props.colorCode , borderRadius: 22, width: 40, height: 40, alignItems: "center"}}>
                                {
                                    ICONPROVIDER(props)
                                }
                            </View>
                        </View>
                        <View style={{width: "50%", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                { props.name }
                            </Label>
                            <Label style={{color: "gray", fontSize: 13 }}>
                                { props.date}
                            </Label>
                        </View>
                        <View style={{width: "25%", alignItems: "center", height: "100%"}}>
                            <Label style={{color: "white", fontSize: 17 }}>
                                { props.value }
                            </Label>
                        </View>
                    </View>
                </Card>
    )
}

export default CustomCard;