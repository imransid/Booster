import React, {Component} from "react";
import { View, ImageBackground, Image,StyleSheet } from "react-native";
import { Form, Item, Label, Input, Icon,Button, Container, Content, Footer, Body, Text, Left, Right} from 'native-base';
import  MenuDrawerBUtton  from "../Menu/MenuButtons";


export default class Register extends Component{


    render(){
        return(
                <Container>
                    <ImageBackground source={require('../../assets/images/Back.png')} style={{width: '100%', height: '100%', alignSelf: 'stretch',flex:1}}>

                        <Content>
                            <View style={{padding : 10}}>
                                <MenuDrawerBUtton navigation={this.props.navigation}/>
                            </View>
                        
                        </Content>

                    </ImageBackground>
                    
                </Container>
            
        )
    }
}