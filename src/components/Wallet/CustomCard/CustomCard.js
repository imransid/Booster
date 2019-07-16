import React from "react";
import { View } from "react-native";
import FONTAWESOME5_ICON from 'react-native-vector-icons/FontAwesome5';
import Swipeout from 'react-native-swipeout';
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

const tansactionEdit = (props) => {
    
    props.navigation.navigate('TRANSECTIONS_EDIT',
                    { 
                        transectionId:  props.transectionid, 
                        amount: props.value,
                        description: props.name,
                        selectCategory: props.selectCategory 
                    });
}

const CustomCard = (props) => {
    return(
        <Swipeout style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5, marginBottom: 10}}
                left={[
                    {
                        text: 'Delete',
                        backgroundColor: '#ed5650',
                        onPress: () => { console.log("Edit") }
                    },
                    {
                        text: 'Edit',
                        backgroundColor: '#e8910d',
                        onPress: () => { tansactionEdit(props) }
                    }
                ]}
                autoClose={true}>
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
        </Swipeout>
    )
}

export default CustomCard;