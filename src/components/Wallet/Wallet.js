import React, {Component} from "react";
import { View,Text, ImageBackground, Image,StyleSheet, TouchableOpacity } from "react-native";
import {Label, Container, Content, Header, Card, Left, Footer, Grid, Row, Col, Button} from 'native-base';
import  MenuDrawerBUtton  from "../Menu/MenuButtons";
import TRANN from 'react-native-vector-icons/FontAwesome';
import WALLETICON from 'react-native-vector-icons/MaterialIcons';
import WALLETCHAT from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomFooter from "./WalletFotter/CustomFooter";
import TransectionData from "./Transection/Transection";
import ADDWALLET from "./AddWallet/AddWallet";
import styles from "./Styles";

export default class Wallet extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            pressStatus: 'transection',
            blockStatus: 'transection' 
          };
        console.log(this.props)
    }

    ADD_transection = () => {
        this.setState({
            pressStatus: "transection",
            blockStatus: 'transection'
          })
    }

    ADD_WALLET = () => {
        this.setState({
            pressStatus: "wallet",
            blockStatus: 'wallet'
          })
    }



    render(){
        return(
                <Container style={{backgroundColor: "#171818"}}>
                    <Header style={{alignContent: "stretch", backgroundColor: '#000000', borderColor: "red"}}>
                        <View style={{flexDirection: "row", width: "100%", paddingTop: 15}}>
                            <MenuDrawerBUtton navigation={this.props.navigation}/>
                            <Label style={{marginLeft: 30, color: "#FFFFFF", fontSize: 20}}>
                                Wallet      
                            </Label>
                        </View>
                    </Header>
                    <Header style={{height: 220, backgroundColor: "#171818"}}>
                        <View style={{width: '100%'}}>

                        <Card style={{height: 120, backgroundColor: "#E3F2FD", marginBottom: 10}}>
                            <View style={{width: "100%", height: "100%", flexDirection: "row", padding: 10}}>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                    <Label style={{color: "black"}}>
                                        Wallet Currency:
                                    </Label>
                                    <Label style={{color: "black", fontWeight: "bold", fontSize: 25}}>
                                        $ USD
                                    </Label>
                                </View>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                    <Label style={{color: "black"}}>
                                        Wallet Balance:
                                    </Label>
                                    <Label style={{color: "black", fontWeight: "bold", fontSize: 25}}>
                                        $ 2500.00
                                    </Label>
                                </View>

                            </View>
                        </Card>
                        <Card style={{backgroundColor : "#282A29", height: 50, borderColor: "#282A29"}}>
                            <View style={{flexDirection: "row"}}>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                        <Button block style={ this.state.pressStatus == "transection"
                        ? styles.buttonPress
                        : styles.button }
                        onPress= {() => this.ADD_transection()}
                                        
                                        >
                                            <Label style={{color: "white"}}>
                                                Transection
                                            </Label>
                                        </Button>
                                </View>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                <Button block style={ this.state.pressStatus == "wallet"
                        ? styles.buttonPress
                        : styles.button }
                        onPress={()=>this.ADD_WALLET()}
                                        >
                                            <Label style={{color: "white"}}>
                                                Wallet
                                            </Label>
                                        </Button>
                                </View>

                            </View>
                        </Card>


                        </View>
                    </Header>

                    <Content style={{padding: 10 }}>
                        
                        <Grid>
                            <Row >
                                {
                                    this.state.blockStatus == 'transection' ? <TransectionData navigation={this.props.navigation} /> : < ADDWALLET navigation={this.props.navigation} />
                                } 
                            </Row>

                        </Grid>

                    </Content>
                    <Footer>
                        <CustomFooter />    
                    </Footer>

                </Container>
            
        )
    }
}