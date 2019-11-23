import React, {Component} from "react";
import {ScrollView, View, TouchableHighlight, Text } from "react-native";
import {Label, Card, Button} from 'native-base';
import { connect } from 'react-redux';
import styles from "./Styles";
import ENTYPO_ICON from 'react-native-vector-icons/Entypo';

class AddWallet extends Component{

    ADD_New_Wallet = () => {
        this.props.navigation.navigate('ADD_WALLET');
    }

    render(){
        return(
            <ScrollView style={{paddingBottom: 10}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={ styles.defaultWalletDetailsTextBlock }>
                        <View style={{width: '50%'}}>
                            <Label style={{color: "black"}}>
                                Bank Name 
                            </Label>
                        </View>
                        <View style={{width: '50%'}}>
                            <Label style={ styles.defaultWalletDetailsText }>
                                 { this.props.details.bank_code }
                            </Label>
                        </View>
                    </View>

                    <View style={ styles.defaultWalletDetailsTextBlock }>
                        <View style={{width: '50%'}}>
                            <Label style={{color: "black"}}>
                                Balance 
                            </Label>
                        </View>
                        <View style={{width: '50%'}}>
                            <Label style={ styles.defaultWalletDetailsText }>
                            { this.props.details.balance }
                            </Label>
                        </View>
                    </View>

                    <View style={ styles.defaultWalletDetailsTextBlock }>
                        <View style={{width: '50%'}}>
                            <Label style={{color: "black"}}>
                                Balance Type 
                            </Label>
                        </View>
                        <View style={{width: '50%'}}>
                            <Label style={ styles.defaultWalletDetailsText }>
                                { this.props.details.balance_type }
                            </Label>
                        </View>
                    </View>

                    <View style={ styles.defaultWalletDetailsTextBlock }>
                        <View style={{width: '50%'}}>
                            <Label style={{color: "black"}}>
                                Card Num 
                            </Label>
                        </View>
                        <View style={{width: '50%'}}>
                            <Label style={ styles.defaultWalletDetailsText }>
                                **** **** **** { this.props.details.card_num }
                            </Label>
                        </View>
                    </View>

                    <View style={ styles.defaultWalletDetailsTextBlock }>
                        <View style={{width: '50%'}}>
                            <Label style={{color: "black"}}>
                            Card Holder Name  
                            </Label>
                        </View>
                        <View style={{width: '50%'}}>
                            <Label style={ styles.defaultWalletDetailsText }>
                            { this.props.details.card_holder_name }
                            </Label>
                        </View>
                    </View>

                    
                    
                </View>

                <View style={{width: '100%', alignItems: 'center', marginTop: 20, height: 70}}>
                    <TouchableHighlight style={styles.defaultButtonaddWallet} onPress={ () => this.ADD_New_Wallet() }>
                        <View style={{flexDirection: 'row'}}>
                            <ENTYPO_ICON 
                                name= "plus" 
                                size={24} 
                                color="#fff"/>
                            <Text style={ styles.ButtonAddWalletText }>
                                Add Wallet
                            </Text>
                        </View>                        
                    </TouchableHighlight>
                </View>

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