import React, {Component} from "react";
import { View, ImageBackground, Image,StyleSheet } from "react-native";
import { Form, Item, Label, Input, Icon, Container, Content, Footer, Body, Text, Left, Right} from 'native-base';
import {GoogleSigninButton} from 'react-native-google-signin';
// import styles from "./../Login/styles";

export default class BackGroundImage extends Component{


    render(){
        return(
                <Container>
                    <ImageBackground source={require('../../assets/images/Back.png')} style={{width: undefined, height: undefined, alignSelf: 'stretch',flex:1}}>

                        <Content>
                            <View  style={{flex: 1, alignItems: 'center', flexDirection: 'column'}} >
                                {/* <View style={styles.headerLogo}> */}<View style={{marginTop:80}} >
                                    <Image source={require('../../assets/images/appLogo.png')  } />
                                </View>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center' , flexDirection: 'row', marginTop: 20}}>
                                <GoogleSigninButton
                                    style={{ width: '100%', height: 48 }}
                                    size={GoogleSigninButton.Size.Wide}
                                    color={GoogleSigninButton.Color.Dark}
                                    onPress={this.props.google}
                                    /> 
                            </View>
                            <View>
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
                        
                        </Content>

                    </ImageBackground>
                    
                </Container>
            
        )
    }
}