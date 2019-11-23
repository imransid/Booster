import React, {Component} from "react";
import { View, ToastAndroid, ScrollView, Picker, AsyncStorage } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Input} from 'native-base';
import { connect } from 'react-redux';
import styles from "../../Wallet/Transection/Styles";
import { add_new_card, Init_Wallet } from "../../../actions/WalletCard";

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
            <Container style={{backgroundColor: "#171820"}}>
            
                <Content>
                    <ScrollView style={{paddingTop: 5 }}>
                        <View style={{flexDirection: "column", padding : 10}}>
                                <View style={{marginTop: 20}}>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}} >
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Card Holder Name :
                                                </Label>
                                            </View>
                                            <View style={{width: "60%", alignItems: "center", height: "100%", padding: 8}}>
                                                <Input onChangeText={card_holder_name => this.setState({ card_holder_name })} placeholder="Enter Name" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
                                            </View>
                                        </Card>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}}>
                                                    <Label style={styles.TransectionCardHeaderText}>
                                                        BANK Name :
                                                    </Label>
                                            </View>
                                            <View style={{width: "60%", height: "100%", padding: 8}}>
                                            <ScrollView style={{ height: "100%"}}>
                                                <Picker style={{color: "#fff"}}
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
                                                </ScrollView>  
                                            </View>
                                        </Card>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}} >
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Balance : 
                                                </Label>
                                            </View>
                                            <View style={{width: "60%", alignItems: "center", height: "100%", padding: 8}}>
                                                <Input keyboardType='numeric' onChangeText={balance => this.setState({ balance })} placeholder="Enter Amount" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
                                            </View>
                                        </Card>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}}>
                                                    <Label style={styles.TransectionCardHeaderText}>
                                                        Balance Type : 
                                                    </Label>
                                            </View>
                                            <View style={{width: "60%", height: "100%", padding: 8}}>
                                            <ScrollView style={{ height: "100%"}}>
                                                <Picker style={{color: "#fff"}}
                                                    selectedValue={this.state.balance_type}
                                                    onValueChange={(itemValue) =>this.setState({ balance_type: itemValue})}>
                                
                                                        <Picker.Item label="CREDIT" value="CREDIT" />
                                                        <Picker.Item label="DABIT" value="DABIT" />
                                                </Picker>
                                                </ScrollView>  
                                            </View>
                                        </Card>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}} >
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Card Num :
                                                </Label>
                                            </View>
                                            <View style={{width: "60%", alignItems: "center", height: "100%", padding: 8}}>
                                                <Input keyboardType='numeric' onChangeText={card_num => this.setState({ card_num })} placeholder="Enter Card Last 4 Degit" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
                                            </View>
                                        </Card>
                                        <Card style={styles.saveTransectionCard}>
                                         
                                            <Button block success onPress={ () => this.ADD_New_Wallet() } style={styles.saveTransectionButton}>
                                                <Label style={styles.saveTransectionButtonText}>
                                                    Save Wallet
                                                </Label>
                                            </Button>
                                            
                                        </Card>
                                </View>
                        </View>
                    </ScrollView>         
                </Content>               
            </Container>

        )
    }
}


const mapStateProps = (state) => {

    return {        
    }
}

export default connect(mapStateProps)(AddNewWallet)