import React, {Component} from "react";
import { View, ScrollView, Picker } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Grid, Row, Input} from 'native-base';
import Pie from 'react-native-pie';
import { connect } from 'react-redux';
import styles from "./Styles";
import { add_new_transection } from "../../../actions/Transection";

class AddNewTransectios extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectCategory: "Shoping",
            description: "",
            amount: "",
            pieValue: 0,
            date: this.DateGenrater(),
            walletId: this.props.navigation.state.params.walletId,
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
                'walletId': this.state.walletId,
                'transectionid': this.state.transectionid
            }


            if(this.props.Avalible_Balance != 0){
                this.props.dispatch(add_new_transection(data, this.props.navigation))
            }else {
                alert("Not Enough Blanse to make transdrvtion")             
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
    
    componentWillReceiveProps(newProps){
        //this.props.navigation.navigate('WALLET');
    }

    render(){
        return(
            <Container style={{backgroundColor: "#171820"}}>
                <Header style={{alignContent: "stretch", backgroundColor: '#000000', borderColor: "red"}}>
                    <View style={{flexDirection: "row", width: "100%", paddingTop: 15}}>
                            <MenuDrawerBUtton navigation={this.props.navigation}/>
                            <Label style={{marginLeft: 30, color: "#FFFFFF", fontSize: 20}}>
                            Add Transection      
                            </Label>
                    </View>
                </Header>
                <Content>
                    <ScrollView style={{paddingTop: 50 }}>
                        <View style={{flexDirection: "column", padding : 10}}>
                                <View style={{alignItems: "center", width: "100%"}}>
                                    <View>
                                        <Pie
                                            radius={75}
                                            //completly filled pie chart with radius 100
                                            innerRadius={68}
                                            series={[this.state.pieValue]}
                                            //values to show and color sequentially
                                            colors={['#ffffff']}
                                            backgroundColor="red"
                                        />
                                        <View style={styles.gauge}>
                                            <Label style={styles.gaugeText}> ${this.props.Balance}</Label>
                                            <Label style={styles.gaugeTextdis}>of ${this.props.UsedBlance} used</Label>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 50}}>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}}>
                                                    <Label style={styles.TransectionCardHeaderText}>
                                                        Category
                                                    </Label>
                                            </View>
                                            <View style={{width: "60%", height: "100%", padding: 8}}>
                                            <ScrollView style={{ height: "100%"}}>
                                                <Picker style={{color: "#fff"}}
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
                                                </ScrollView>  
                                            </View>
                                        </Card>
                                        <Card style={{flexDirection: "row", backgroundColor: "#171818", height: 80}}>
                                            <View style={{width: "40%", paddingLeft: 20, height: "100%", paddingTop: 20}} >
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Amount
                                                </Label>
                                            </View>
                                            <View style={{width: "60%", alignItems: "center", height: "100%", padding: 8}}>
                                                <Input onChangeText={amount => this.setState({ amount })} placeholder="Enter Amount" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
                                            </View>
                                        </Card>
                                        <Card style={{backgroundColor: "#171818", height: 150, flexDirection: "column"}}>
                                            <View style={{ paddingLeft: 20, width: "100%", height: "30%", paddingTop: "3%"}}>
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Description
                                                </Label>
                                            </View>
                                            <View style={styles.DescriptionInputView}>
                                                <Input onChangeText={description => this.setState({ description })} placeholder="Enter Description" placeholderTextColor="#fff" style={styles.DescriptionInputBox} />
                                            </View>
                                            
                                        </Card>
                                        <Card style={styles.saveTransectionCard}>
                                         
                                            <Button block success onPress={ () => this.ADD_New_Transection() } style={styles.saveTransectionButton}>
                                                <Label style={styles.saveTransectionButtonText}>
                                                    Save Transection
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
    const Balance = state.TRASECTION.wallet_detaits.balance;

    const UsedBlance = state.TRASECTION.wallet_detaits.balance - state.TRASECTION.wallet_detaits.avalible_balance

    const AddNewTransection = state.TRASECTION.AddNewTransection;

    const Avalible_Balance = state.TRASECTION.wallet_detaits.avalible_balance;

    return {
        AddNewTransection,
        UsedBlance,
        Balance,
        Avalible_Balance
    }
}

export default connect(mapStateProps)(AddNewTransectios)