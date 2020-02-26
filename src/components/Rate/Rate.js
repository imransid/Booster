import React, { Component } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { Label, Container, Content, Header, Card, Left, Footer, Grid, Row, Col, Button } from 'native-base';
import START from 'react-native-vector-icons/Feather';
import STARTROUND from 'react-native-vector-icons/FontAwesome';

export default class Rate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favouriteCheck: false,
            favouriteCheck2: false,
            favouriteCheck3: false,
            favouriteCheck4: false,
            favouriteCheck5: false,
        };
    }
    StarReplace = () => {
        this.setState({
            favouriteCheck: true,
        })
    }
    StarReplace2 = () => {
        this.setState({
            favouriteCheck:true,
            favouriteCheck2:true,
        })
    }
    StarReplace3 = () => {
        this.setState({
            favouriteCheck:true,
            favouriteCheck2:true,
            favouriteCheck3:true,
        })
    }
    StarReplace4 = () => {
        
        this.setState({
            favouriteCheck:true,
            favouriteCheck2:true,
            favouriteCheck3:true,
            favouriteCheck4:true,
        })
    
    }
    StarReplace5 = () => {
        
        this.setState({
            favouriteCheck:true,
            favouriteCheck2:true,
            favouriteCheck3:true,
            favouriteCheck4:true,
            favouriteCheck5: true,
        })
    
    }
    

    StarReplaceRemove =() =>{
        this.setState({
            favouriteCheck2:false,
            favouriteCheck3:false,
            favouriteCheck4:false,
            favouriteCheck5: false,
        })
    }
    StarReplaceRemove2 =() =>{
        this.setState({
            favouriteCheck3:false,
            favouriteCheck4:false,
            favouriteCheck5: false,
        })
    }
    StarReplaceRemove3 =() =>{
        this.setState({
            favouriteCheck4:false,
            favouriteCheck5: false,
        })
    }
    StarReplaceRemove4 =() =>{
        this.setState({
            favouriteCheck5: false,
        })
    }
   
    render() {
        return (

            <Container style={{ backgroundColor: "#171818", justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={require("../../assets/images/man.png")} />
                    <Text style={{ fontSize: 30, color: '#fff', fontFamily: "Proxmia" }}>Imran Khan</Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ color: "#fff", fontSize: 22, marginBottom: 15, fontFamily: "Proxmia", }}>Rate Our App</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.state.favouriteCheck === false && (
                                <TouchableOpacity onPress={() => this.StarReplace()}>
                                    <START
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck === true && (
                                <TouchableOpacity onPress={() => this.StarReplaceRemove()}>
                                    <STARTROUND
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck2 === false &&  (
                                <TouchableOpacity onPress={() => this.StarReplace2()}>
                                    <START
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck2 === true &&  (
                                <TouchableOpacity onPress={() => this.StarReplaceRemove2()}>
                                    <STARTROUND
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck3 === false && (
                                <TouchableOpacity onPress={() => this.StarReplace3()}>
                                    <START
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck3 === true && (
                                <TouchableOpacity onPress={() => this.StarReplaceRemove3()}>
                                    <STARTROUND
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck4 === false && (
                                <TouchableOpacity onPress={() => this.StarReplace4()}>
                                    <START
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck4 === true && (
                                <TouchableOpacity onPress={() => this.StarReplaceRemove4()}>
                                    <STARTROUND
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck5 === false && (
                                <TouchableOpacity onPress={() => this.StarReplace5()}>
                                    <START
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                        {
                            this.state.favouriteCheck5 === true && (
                                <TouchableOpacity>
                                    <STARTROUND
                                        name='star'
                                        size={25}
                                        color="#fff" style={{ marginLeft: 5 }}/>
                                </TouchableOpacity>
                            )
                        }
                    </View>

                    <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                        <View><Text style={{ fontSize: 20, color: '#fff', fontFamily: "Proxmia" }}>Thank Us</Text></View>
                        <View><Text style={{ fontSize: 14, color: '#fff', fontFamily: "Proxmia" }}>a little donation can encourage us a lot to h</Text></View>
                        <View>
                            <Button style={{ backgroundColor: '#fff', color: '#000', width: '100%', paddingLeft: 30, paddingRight: 30, height: 25, marginTop: 10 }}>
                                <Text>$7</Text>
                            </Button>
                        </View>
                        <View>
                            <TextInput style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 80, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 10, backgroundColor: "#fff", marginTop: 10 }} placeholder="Leave us a message" />
                        </View>
                        <View>
                            <Button style={{ backgroundColor: '#b7b7b7', color: '#000', width: '100%', paddingLeft: 30, paddingRight: 30, height: 25, marginTop: 10 }}>
                                <Text style={{ fontFamily: "Proxmia", color: "#1d1e1e" }}>Donate</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Container>

        )
    }
}