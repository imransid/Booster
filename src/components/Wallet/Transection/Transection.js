import React, {Component} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import {Label, Card} from 'native-base';
import CUSTOMADDCARD from "../CustomCard/CustomCard";


export default class Transection extends Component{
    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>

                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#3ACDFC'} name={'Credit Card'} iconName={'md-car'} date={'Dec, 11, 2017'} value={'$ 16'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36555'} />
                <CUSTOMADDCARD IconGenarater={'OC'} colorCode={'#F81894'} name={'Gift'} iconName={'gift'} date={'Dec, 11, 2019'} value={'$ 36.88'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#006727'} name={'Dinner'} iconName={'food'} date={'Dec, 11, 2019'} value={'$ 500'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <Label>ONE</Label>
                </Card>
                
            </ScrollView>
            
        )
    }
}