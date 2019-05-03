import React, {Component} from "react";
import { View, ImageBackground, Image } from "react-native";
import { Form, Item, Label, Input, Icon, Container, Content, Footer, Body, Text, Left, Right} from 'native-base';

export default class BackGroundImage extends Component{
    render(){
        return(
                <Container>
                    <ImageBackground source={require('../../assets/images/bg.png')} style={{width: '100%', height: '100%'}}>

                        <Content>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column'}}>
                                <View>
                                    <Image source={require('../../assets/images/logo.png')} />
                                </View>
                                
                                <View>
                                    <Text style={{fontWeight: 'bold'}}> Mr. Accountant</Text>
                                </View>

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