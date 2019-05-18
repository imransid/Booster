import React, {Component} from "react";
import { View,Text, ImageBackground, Image,StyleSheet } from "react-native";
import {Label, Container, Content, Header, Card, Left} from 'native-base';
import  MenuDrawerBUtton  from "../Menu/MenuButtons";


export default class Wallet extends Component{


    render(){
        return(
                // <Container>
                    /* <ImageBackground source={require('../../assets/images/bgi.png')} style={{width: '100%', height: '100%', alignSelf: 'stretch',flex:1}}> */
/* 
                        <Content style={{backgroundColor: "black"}}>
                            <View style={{padding : 10}}>
                                <MenuDrawerBUtton navigation={this.props.navigation}/>
                            </View>
                        
                        </Content> */

                    /* </ImageBackground> */
                    
                // </Container>

                // <View style={{backgroundColor: "#171818", height: "100%", width: "100%"}}>
 
                // </View>
                <Container style={{backgroundColor: "#171818"}}>
                    <Header style={{alignContent: "stretch", backgroundColor: '#000000', borderColor: "red"}}>
                        <View style={{flexDirection: "row", width: "100%", paddingTop: 15}}>
                            <MenuDrawerBUtton navigation={this.props.navigation}/>
                            <Label style={{marginLeft: 30, color: "#FFFFFF", fontSize: 20}}>
                                Wallet      
                            </Label>
                        </View>
                    </Header>

                    <Content style={{padding: 10}}>
                        <Card style={{height: 100, backgroundColor: "#E3F2FD", marginBottom: 10}}>
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
                        <Card>
                            
                        </Card>

                    </Content>

                </Container>
            
        )
    }
}