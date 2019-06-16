import React, {Component} from "react";
import { View, ToastAndroid, ScrollView, Picker } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Input} from 'native-base';
import { connect } from 'react-redux';
import styles from "../../Wallet/Transection/Styles";
class AddNewWallet extends Component{

    constructor(){
        super();
        this.state = {
            card_holder_name: "",
            bank_code: "002",
            balance: "",
            balance_type: "dabit",
            wallet_add_date: this.DateGenrater(),
            card_num: ""
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
        // this.props.dispatch(letast_transection())
    }

    ADD_New_Wallet = () => {
        if(this.state.card_holder_name == "" && this.state.bank_code == "" && this.state.balance == "" && this.state.balance_type == "" && this.state.card_num == ""){

        }else{
            ToastAndroid.show('Data save successfully', ToastAndroid.SHORT);
        }
        
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
                            Add Wallet      
                            </Label>
                    </View>
                </Header>
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
                                                    selectedValue={this.state.selectCategory}
                                                    onValueChange={(itemValue) =>this.setState({ bank_code: itemValue})}>
                                
                                                        <Picker.Item label="BRAC BANK" value="001" />
                                                        <Picker.Item label="CITY BANK" value="002" />
                                                        <Picker.Item label="DBBL" value="003" />
                                                        <Picker.Item label="Dhaka Bank" value="004" />
                                                        <Picker.Item label="NRB BANK" value="005" />
                                                        <Picker.Item label="EBL BANK" value="006" />
                                                        <Picker.Item label="Other" value="007" />
                                                    
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
                                                <Input onChangeText={balance => this.setState({ balance })} placeholder="Enter Amount" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
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
                                
                                                        <Picker.Item label="CREDIT" value="credit" />
                                                        <Picker.Item label="DABIT" value="dabit" />
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
                                                <Input onChangeText={card_num => this.setState({ card_num })} placeholder="Enter Card Num" placeholderTextColor="#fff" style={{width: "100%", color: "#fff"}} />
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