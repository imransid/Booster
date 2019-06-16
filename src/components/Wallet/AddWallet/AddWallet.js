import React, {Component} from "react";
import {ScrollView } from "react-native";
import {Label, Card, Button} from 'native-base';

import CUSTOMADDCARD from "../CustomCard/CustomCard";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class AddWallet extends Component{

    ADD_New_Wallet = () => {
        this.props.navigation.navigate('ADD_WALLET');
    }

    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>
                <Card style={{backgroundColor : "#1B282A", height : 220, borderColor : "#3E287B", borderRadius: 5, padding: 10}}>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Bank Name : BRAC
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Balance : 80000
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Balance Type : DABIT
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Card Num : 8300 4700 1201 9483
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Card Holder Name : IMRAN KHAN OPU
                    </Label>
                </Card>
                <Card style={{borderColor : "#171818", paddingTop: 20 , height : 70, backgroundColor: "#171818"}}>
                {/* borderColor : "#3E287B", borderRadius: 5  */}
                        <Button block success onPress={ () => this.ADD_New_Wallet() }>
                            <Label style={{fontWeight: "900", color: "#ffffff"}}>Add WALLET</Label>
                        </Button>
                </Card>
            </ScrollView>
            
        )
    }
}