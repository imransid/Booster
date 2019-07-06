import React, {Component} from "react";
import {ScrollView } from "react-native";
import {Label, Card, Button} from 'native-base';
import { connect } from 'react-redux';

class AddWallet extends Component{

    ADD_New_Wallet = () => {
        this.props.navigation.navigate('ADD_WALLET');
    }

    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>
                <Card style={{backgroundColor : "#1B282A", height : 220, borderColor : "#3E287B", borderRadius: 5, padding: 10}}>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Bank Name : { this.props.details.bank_code }
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Balance : { this.props.details.balance }
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Balance Type : { this.props.details.balance_type }
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Card Num : **** **** **** { this.props.details.card_num }
                    </Label>
                    <Label style={{color: "white", margin: 10, fontWeight: "900"}}>
                        Card Holder Name : { this.props.details.card_holder_name }
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


const mapStateProps = (state) => {

    const details = state.TRASECTION.wallet_detaits;

    return {
        details
    }
}

export default connect(mapStateProps)(AddWallet)