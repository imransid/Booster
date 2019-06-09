import React, {Component} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import MI from 'react-native-vector-icons/MaterialIcons';
import FONTAWESOME5_ICON from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'react-native-vector-icons/Octicons';
import GIFTPROVIDER from 'react-native-vector-icons/AntDesign';
import ENTYPO_ICON from 'react-native-vector-icons/Entypo';
import {Label, Card} from 'native-base';


const ICONPROVIDER = (props) => {

    
    if(props.IconGenarater == "GIFTPROVIDER"){
        return(
            <GIFTPROVIDER 
                name= { props.iconName } 
                size={28} 
                color="#fff"/>
        )
    } else if(props.IconGenarater == "ENTYPO_ICON"){
        return(
            <ENTYPO_ICON 
                name= { props.iconName } 
                size={28} 
                color="#fff"/>
        )
    } else if(props.IconGenarater == "FONTAWESOME5_ICON"){
        return(
            <FONTAWESOME5_ICON 
                name= { props.iconName } 
                size={28} 
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