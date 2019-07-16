import React, {Component} from "react";
import { View, ScrollView, Picker, AsyncStorage, ToastAndroid } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Grid, Row, Input} from 'native-base';
import styles from "./Styles";

export default class Transections_edit extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectCategory: props.navigation.state.params.selectCategory,
            description: props.navigation.state.params.description,
            transectionid: props.navigation.state.params.transectionId,
            amount: props.navigation.state.params.amount,

         }
    }

    TransectionUpdate = () => {
        try{
            AsyncStorage.getItem('transection@Data').then(res => {
                let data = JSON.parse(res);
                let result = [];

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


                if(data.length == undefined){

                    let action_result = {
                        'amount': this.state.amount,
                        'description': this.state.description,
                        'selectCategory': this.state.selectCategory,
                        'date': data.date,
                        'colorCode': colorCode,
                        'IconCode': IconCode,
                        'IconName': IconName,
                        'walletId': data.walletId,
                        'transectionid': this.state.transectionid
                    }
                    
                    result = action_result

                }else{
                      
                    let objIndex = data.findIndex(obj => obj.transectionid === this.state.transectionid)
                    // let updateObj = { ...data[objIndex], avalible_balance : data[objIndex].avalible_balance - amounT }
                    // result = [
                    //     ...data.slice(0, objIndex), updateObj, ...data.slice(objIndex + 1)
                    // ];
                    console.log('objIndex', objIndex)            
                    }
                    
                    
                if(result){

                        AsyncStorage.setItem("transection@Data", JSON.stringify(result)).then(() => {
                            
                            ToastAndroid.show('Data save successfully', ToastAndroid.SHORT);
                            this.props.navigation.navigate('WALLET');
                            
                        });
    
                    }else{
                        console.log("no data in our result check: saga_actions/All_Data_Transections")
                }
    
            })
    
        } catch (error){
            console.log('async save prlm', error)
        }
    }

    render(){
        return(
            <Container style={{backgroundColor: "#171820"}}>
                <Header style={{alignContent: "stretch", backgroundColor: '#000000', borderColor: "red"}}>
                    <View style={{flexDirection: "row", width: "100%", paddingTop: 15}}>
                            <MenuDrawerBUtton navigation={this.props.navigation}/>
                            <Label style={{marginLeft: 30, color: "#FFFFFF", fontSize: 20}}>
                            Edit Transection      
                            </Label>
                    </View>
                </Header>
                <Content>
                    <ScrollView style={{paddingTop: 50 }}>
                        <View style={{flexDirection: "column", padding : 10}}>
                                
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
                                                <Input value={this.state.amount} onChangeText={amount => this.setState({ amount })} placeholder="Enter Amount" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
                                            </View>
                                        </Card>
                                        <Card style={{backgroundColor: "#171818", height: 150, flexDirection: "column"}}>
                                            <View style={{ paddingLeft: 20, width: "100%", height: "30%", paddingTop: "3%"}}>
                                                <Label style={styles.TransectionCardHeaderText}>
                                                    Description
                                                </Label>
                                            </View>
                                            <View style={styles.DescriptionInputView}>
                                                <Input value={this.state.description} onChangeText={description => this.setState({ description })} placeholder="Enter Description" placeholderTextColor="#fff" style={styles.DescriptionInputBox} />
                                            </View>
                                            
                                        </Card>
                                        <Card style={styles.saveTransectionCard}>
                                         
                                            <Button block success onPress={ () => this.TransectionUpdate() } style={styles.saveTransectionButton}>
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