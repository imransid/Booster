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
        this.state = {}
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
                                History      
                            </Label>
                    </View>
                </Header>
                <Content>
                    <ScrollView style={{paddingTop: 50 }}>
                        
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