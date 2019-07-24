import React, {Component} from "react";
import { View, ScrollView, Picker, ToastAndroid } from "react-native";
import MenuDrawerBUtton from "../../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Grid, Row, Input} from 'native-base';
import Pie from 'react-native-pie';
import { connect } from 'react-redux';
import styles from "../Transection/Styles";

class History extends Component{

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

    componentDidMount(){
    }

    ADD_New_Transection = () => {
        
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
    return {

    }
}

export default connect(mapStateProps)(History)