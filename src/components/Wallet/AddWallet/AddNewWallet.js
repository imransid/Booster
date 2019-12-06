import React, {Component} from "react";
import { View, ToastAndroid, ScrollView, Picker, AsyncStorage, Text, TouchableHighlight } from "react-native";
import {Label, Card, Button, Container, Header, Content, Input} from 'native-base';
import { connect } from 'react-redux';
import styles from "../../Wallet/Transection/Styles";
import { add_new_card, Init_Wallet } from "../../../actions/WalletCard";
import ENTYPO_ICON from 'react-native-vector-icons/Entypo';

class AddNewWallet extends Component{
    constructor(){
        super();
        this.state = {
            card_holder_name: "",
            bank_code: "BRAC BANK",
            balance: "",
            balance_type: "CREDIT",
            wallet_add_date: this.DateGenrater(),
            card_num: "",
            wallet_id: this.GenrateWalletID(12)
        }
    }

    GenrateWalletID = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    DateGenrater = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear();

        today = dd + '-' + mm + '-' + year;

        return today;

    }

    async InitialWallet_Chk(){

        let data = await AsyncStorage.getItem('wallet@Card');
        let result = JSON.parse(data)
        let finalResult;
        result.wallet_id == "Testing" ? finalResult = true : finalResult = false;
        return finalResult; 

    }

    WalletInitDataUpadte(result){

        AsyncStorage.setItem("wallet@Card", JSON.stringify(result))
        .then(() => {
            ToastAndroid.show('Wallet Add successfully', ToastAndroid.SHORT);
            this.props.dispatch(Init_Wallet());
            this.props.navigation.navigate('WALLET');
        });
    }

    ADD_New_Wallet = () => {
        if(this.state.card_holder_name == "" && this.state.bank_code == "" && this.state.balance == "" && this.state.balance_type == "" && this.state.card_num == ""){
            ToastAndroid.show("Please Cheak Again Cann't Save Empty Field", ToastAndroid.SHORT);
        }else{
            let data = {
                'card_holder_name': this.state.card_holder_name,
                'bank_code': this.state.bank_code,
                'balance': this.state.balance,
                'balance_type': this.state.balance_type,
                'wallet_add_date': this.state.wallet_add_date,
                'card_num': this.state.card_num,
                'wallet_id': this.state.wallet_id,
                'avalible_balance': this.state.balance,
                'syncStatus': false
            }

            this.InitialWallet_Chk().then((e) => {
                if(e == true){
                    this.WalletInitDataUpadte(data)
                }else{
                    this.props.dispatch(add_new_card(data, this.props.navigation));
                }
            })
        }
        
    }
    
    render(){
        return(
            <View style={{flex:1, backgroundColor: '#FFF'}}>
                <ScrollView style={{padding: 10 }}>
                    <View style={{flexDirection: 'column', width: '100%', height: '100%'}}>
                        <View style={styles.CardBlockSyle}>
                            <View style={styles.CardTextSyle}>
                                    <Text style={styles.CardText}>
                                        Card Holder Name
                                    </Text>
                            </View>
                            <View>
                              <Input onChangeText={card_holder_name => this.setState({ card_holder_name })} placeholder="Enter Name" placeholderTextColor="#304FFE" style={{width: "100%", color: "#304FFE"}} />
                            </View>
                        </View>
                        <View style={styles.CardBlockSyle}>
                            <View style={styles.CardTextSyle}>
                                    <Text style={styles.CardText}>
                                        Bank Name
                                    </Text>
                            </View>
                            <View style={{width: '50%', height: '100%'}}>

                            <Picker style={{color: "#304FFE"}}
                                    selectedValue={this.state.bank_code}
                                    onValueChange={(itemValue) =>this.setState({ bank_code: itemValue})}>
                                
                                        <Picker.Item label="BRAC BANK" value="BRAC BANK" />
                                        <Picker.Item label="CITY BANK" value="CITY BANK" />
                                        <Picker.Item label="DBBL" value="DBBL" />
                                        <Picker.Item label="Dhaka Bank" value="Dhaka Bank" />
                                        <Picker.Item label="NRB BANK" value="NRB BANK" />
                                        <Picker.Item label="EBL BANK" value="EBL BANK" />
                                        <Picker.Item label="Others Bank" value="Others Bank" />
                                                    
                            </Picker>

                            </View>
                        </View>
                        <View style={styles.CardBlockSyle}>
                            <View style={styles.CardTextSyle}>
                                <Text style={styles.CardText}>
                                    Balance
                                </Text>
                            </View>
                            <View>
                                <Input keyboardType='numeric' onChangeText={balance => this.setState({ balance })} placeholder="Enter Amount" placeholderTextColor="#304FFE" style={{width: "100%", color: "#304FFE"}} />
                            </View>
                        </View>
                        <View style={styles.CardBlockSyle}>
                            <View style={styles.CardTextSyle}>
                                    <Text style={styles.CardText}>
                                        Balance Type
                                    </Text>
                            </View>
                            <View style={{width: '50%', height: '100%'}}>
                                        <Picker style={{color: "#304FFE"}}
                                                    selectedValue={this.state.balance_type}
                                                    onValueChange={(itemValue) =>this.setState({ balance_type: itemValue})}>
                                
                                                        <Picker.Item label="CREDIT" value="CREDIT" />
                                                        <Picker.Item label="DABIT" value="DABIT" />
                                        </Picker>
                            </View>
                        </View>

                        <View style={styles.CardBlockSyle}>
                            <View style={styles.CardTextSyle}>
                                    <Text style={styles.CardText}>
                                     Card Num
                                    </Text>
                            </View>
                            <View>
                                <Input keyboardType='numeric' onChangeText={card_num => this.setState({ card_num })} placeholder="Enter Card Last 4 Degit" placeholderTextColor="#304FFE" style={{width: "100%", color: "#304FFE"}} />
                            </View>
                        </View>
                        <View style={{width: '100%', height: 70, marginTop: 100, flexDirection: 'row'}}>
                            <View style={{width: '15%'}}></View>
                            <View style={{width: '70%', alignItems: 'center'}}>
                                <TouchableHighlight style={styles.defaultButtonTransection} onPress={ () => this.ADD_New_Wallet() } >
                                    <View style={{flexDirection: 'row'}}>
                                        <ENTYPO_ICON 
                                            name= "plus" 
                                            size={18} 
                                            color="#fff"/>
                                        <Label style={ styles.ButtonAddTransectionText }>
                                            Add Wallet
                                        </Label>
                                    </View>                        
                                </TouchableHighlight>
                            </View>
                            <View style={{width: '15%'}}></View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapStateProps = (state) => {

    return {        
    }
}

export default connect(mapStateProps)(AddNewWallet)