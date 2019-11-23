import React, {Component} from "react";
import { View, ScrollView, Picker, ToastAndroid, ImageBackground, Image, TouchableHighlight } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Input} from 'native-base';
import Pie from 'react-native-pie';
import { connect } from 'react-redux';
import styles from "./Styles";
import { add_new_transection } from "../../../actions/Transection";
import HeaderMenu from "../ComponentHeader/HeaderMenu";
import ENTYPO_ICON from 'react-native-vector-icons/Entypo';

class AddNewTransectios extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectCategory: "Shoping",
            description: "",
            amount: "",
            pieValue: 0,
            date: this.DateGenrater(),
            //walletId: this.props.navigation.state.params.walletId,
            transectionid: this.GenrateWalletID(12)
        }
    }

    DateGenrater = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear();

        today = dd + '-' + mm + '-' + year;

        return today;
    }

    componentDidMount(){

        let usedParcentage = parseInt((this.props.UsedBlance * 100) / this.props.Balance );
        this.setState({
            pieValue: usedParcentage
        })
    }

    ADD_New_Transection = () => {
        
        if(this.state.amount == "" && this.state.description == ""){

        }else{
            let colorCode, IconCode, IconName;
            if(this.state.selectCategory == "Shoping"){
                colorCode = "#808000";
                IconCode = "ENTYPO_ICON";
                IconName = "shopping-cart";
            }else if(this.state.selectCategory == "Eating"){
                colorCode = "#503000";
                IconCode = "FONTAWESOME5_ICON";
                IconName = "utensils";
            }else if(this.state.selectCategory == "Party"){
                colorCode = "#609090";
                IconCode = "FONTAWESOME5_ICON";
                IconName = "cocktail";
            }else if(this.state.selectCategory == "Gift"){
                colorCode = "#F81894";
                IconCode = "GIFTPROVIDER";
                IconName = "gift";
            }else if(this.state.selectCategory == "Travel"){
                colorCode = "#006727";
                IconCode = "GIFTPROVIDER";
                IconName = "car";
            }else if(this.state.selectCategory == "Other"){
                colorCode = "#8B0000";
                IconCode = "FONTAWESOME5_ICON";
                IconName = "info";
            }else if(this.state.selectCategory == "Bill"){
                colorCode = "#B25204";
                IconCode = "FONTAWESOME5_ICON";
                IconName = "credit-card";
            }


            let data = {
                'selectCategory': this.state.selectCategory,
                'description': this.state.description,
                'amount': this.state.amount,
                'date': this.state.date,
                'colorCode': colorCode,
                'IconCode': IconCode,
                'IconName': IconName,
                'walletId': this.props.walletId,
                'transectionid': this.state.transectionid
            }

            if(this.state.selectCategory == 'Bill'){
                if(this.props.Card_Type == 'DABIT'){
                    
                    this.props.dispatch(add_new_transection(data, this.props.navigation, this.state.selectCategory, this.props.Card_Type))
                    
                }
                else{
                    let billBalance = parseInt(this.props.Balance) - parseInt(this.props.Avalible_Balance) 
                    let initChker = parseInt(this.state.amount) + parseInt(this.props.Avalible_Balance)
                    if(initChker < this.props.Balance){

                        this.props.dispatch(add_new_transection(data, this.props.navigation, this.state.selectCategory, this.props.Card_Type))
   
                    }
                    else{
                        alert(`You Cann't Pay More Than ${billBalance}. Because your card Balance is ${this.props.Balance}` )
                    }
                    
                }
            } else{
                // not bill transection
                if(this.props.Avalible_Balance != 0){
                    this.props.dispatch(add_new_transection(data, this.props.navigation, this.state.selectCategory, this.props.Card_Type))
                }else {
                    alert("! Not Enough Blance to make This Transection")             
                }
            }
            
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

    render(){
        return(
            <ImageBackground source={require('../../../assets/images/add-transection-bg.png')} style={{flex: 1}} >
                
                <View style={{flexDirection: 'column'}}>
                    <HeaderMenu props={this.props} title="Add Transection"/>
                    <View style={{ width: '100%', height: '50%', alignItems: 'center', paddingTop: 20}}> 

                        <Image style={{height: 180, width: '50%'}} source={require('../../../assets/images/circle.png')} />
                        <View style={{position: 'absolute', marginTop: 35}}>
                            <Pie
                                radius={75}
                                //completly filled pie chart with radius 100
                                innerRadius={68}
                                series={[this.state.pieValue]}
                                //values to show and color sequentially
                                colors={['#ffffff']}
                                backgroundColor="#1DE9B6"
                            />
                            <View style={styles.gauge}>
                                <Label style={styles.gaugeText}> ${this.props.Balance}</Label>
                                <Label style={styles.gaugeTextdis}>of ${this.props.UsedBlance} used</Label>
                            </View>
                        </View>
                        
                    </View>
                    <ScrollView style={{height: '40%', width: '100%', paddingBottom: 50}}>
                    <View style={{width: '100%', height: '100%', flexDirection: 'column', padding: 13}}>
                    
                        <View style={{ width: '100%'}}>
                            <Card style={{ height: 50, width: '100%'}}>
                                <View style={{flexDirection: 'row',  padding: 10}}>
                                    <View style={{width: '40%'}}>
                                        <Label style={{fontWeight: '900'}}>Category</Label>
                                    </View>
                                    <View style={{width: '60%'}}>
                                        <Picker style={{color: "#313BDD", height: 25}}
                                        selectedValue={this.state.selectCategory}
                                        onValueChange={(itemValue) =>this.setState({ selectCategory: itemValue})}>
                                            <Picker.Item label="Shoping" value="Shoping" />
                                            <Picker.Item label="Eating" value="Eating" />
                                            <Picker.Item label="Party" value="Party" />
                                            <Picker.Item label="Gift" value="Gift" />
                                            <Picker.Item label="Bill" value="Bill" />
                                            <Picker.Item label="Travel" value="Travel" />
                                            <Picker.Item label="Other" value="Other" />
                                        </Picker>
                                    </View>
                                </View>
                            </Card>
                        </View>

                        <View style={{ width: '100%'}}>
                            <Card style={{ height: 50, width: '100%'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width: '40%', padding: 10}}>
                                        <Label style={{fontWeight: '900'}}>Enter Amount</Label>
                                    </View>
                                    <View style={{width: '60%', height: 40, marginBottom: 10}}>
                                        <Input 
                                            onChangeText={amount => this.setState({ amount })} 
                                            placeholder="Enter Amount" 
                                            placeholderTextColor="#313BDD" 
                                            style={{width: "100%", color: "#313BDD"}} />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        <View style={{ width: '100%'}}>
                            <Card style={{ height: 120, width: '100%'}}>
                                <View style={{flexDirection: 'column'}}>
                                    <View style={{width: '100%', padding: 10}}>
                                        <Label style={{fontWeight: '900'}}>Enter Amount</Label>
                                    </View>
                                    <View style={{width: '100%', height: 40, marginBottom: 10}}>
                                        <Input 
                                            onChangeText={description => this.setState({ description })} 
                                            placeholder="Enter Description" 
                                            placeholderTextColor="#313BDD" 
                                            style={styles.DescriptionInputBox} />
                                    </View>
                                </View>
                            </Card>
                        </View>
                        
                        <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
                            
                            <View style={{width: '100%', alignItems: 'center'}}>
                                <TouchableHighlight style={styles.defaultButtonTransection} onPress={ () => this.ADD_New_Transection() }>
                                    <View style={{flexDirection: 'row'}}>
                                        <ENTYPO_ICON 
                                            name= "save" 
                                            size={18} 
                                            color="#fff"/>
                                        <Label style={ styles.ButtonAddTransectionText }>
                                            Save
                                        </Label>
                                    </View>                        
                                </TouchableHighlight>
                            </View>

                        </View>

                    </View>
                    </ScrollView>
                </View>
                
            </ImageBackground>
        )
    }
}


const mapStateProps = (state) => {
    const Balance = state.TRASECTION.wallet_detaits.balance;
    const Card_Type = state.TRASECTION.wallet_detaits.balance_type;
    const UsedBlance = state.TRASECTION.wallet_detaits.balance - state.TRASECTION.wallet_detaits.avalible_balance;
    const Avalible_Balance = state.TRASECTION.wallet_detaits.avalible_balance;
    const walletId = state.TRASECTION.wallet_id;
    
    return {
        UsedBlance,
        Balance,
        Avalible_Balance,
        walletId,
        Card_Type
    }
}

export default connect(mapStateProps)(AddNewTransectios)