import React, {Component} from "react";
import {ScrollView } from "react-native";
import {Label, Card} from 'native-base';

import CUSTOMADDCARD from "../CustomCard/CustomCard";


export default class AddWallet extends Component{


    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#3ACDFC'} name={'Credit Card'} iconName={'md-car'} date={'Dec, 11, 2017'} value={'$ 16'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                

                <Card style={{backgroundColor : "#3E287B", height : 70, borderColor : "#3E287B", borderRadius: 5}}>
                    <Label>Add Transection</Label>
                </Card>
                
            </ScrollView>
            
        )
    }
}