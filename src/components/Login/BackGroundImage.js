import React, {Component} from "react";
import { View, ImageBackground, Image,StyleSheet } from "react-native";
import { Form, Item, Label, Input, Icon,Button, Container, Content, Footer, Body, Text, Left, Right} from 'native-base';
import {GoogleSigninButton} from 'react-native-google-signin';

import FBbutton from './facebookButton/fb_Button';
import GooGleButton from './googleButton/google_button';
import { white } from "ansi-colors";

export default class BackGroundImage extends Component{


    render(){
        return(
                <Container>
                    <ImageBackground source={require('../../assets/images/Back.png')} style={{width: '100%', height: '100%', alignSelf: 'stretch',flex:1}}>

                        <Content>
                            <View  style={{flex: 1, alignItems: 'center', flexDirection: 'column'}} >
                                {/* <View style={styles.headerLogo}> */}<View style={{marginTop:80}} >
                                    <Image source={require('../../assets/images/appLogo.png')  } />
                                </View>

                            </View>
                            
                            <View style={{ flex: 1, marginBottom: "20%"}}>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>EMAIL</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>PASSWORD</Label>
                                        <Input />
                                    </Item>
                                </Form>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', marginBottom: "30%"}}>
                            
                                    <View style={{width: '90%', marginBottom: "5%"}}>
                                        <Button block light small style={{borderRadius : 15}}>
                                            <Text>Sign in</Text>
                                        </Button>
                                    </View>

                                    <View style={{width: '90%'}}>
                                        <Button block transparent small style={{borderRadius : 15, borderColor: 'white', borderWidth: 1}}>
                                            <Text style={{color: 'white'}}>Create Account</Text>
                                        </Button>
                                    </View>

                            </View>
                            

                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
                                    
                                    <View style={{ marginLeft: "30%"}}>
                                        <GooGleButton
                                        g_method = {this.props.google} 
                                        />
                                    </View>
                                    <View style={{ marginRight: "30%" }}>
                                        <FBbutton
                                        fb_metgod = {this.props.facebook} 
                                        />
                                    </View>
                                                                
                                
                            </View>
                        
                        </Content>

                    </ImageBackground>
                    
                </Container>
            
        )
    }
}