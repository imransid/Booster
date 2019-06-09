import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, Image } from "react-native";
import {Label, Container, Content, Header, Card, Footer, Grid, Row, Button} from 'native-base';
import  MenuDrawerBUtton  from "../Menu/MenuButtons";
import CustomFooter from "./WalletFotter/CustomFooter";
import TransectionData from "./Transection/Transection";
import ADDWALLET from "./AddWallet/AddWallet";
import styles from "./Styles";
import { letast_transection } from "../../actions/Transection";

class Wallet extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            pressStatus: 'transection',
            blockStatus: 'transection' 
          };
        this.navigationWillFocusListener = this.props.navigation.addListener('willFocus', () => {
            this.props.dispatch(letast_transection())
          });
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
            this.props.lodder ? 
                    <View style={{ flex:1,alignItems:'center',justifyContent:'center',backgroundColor: '#1b2129' }}>
                        <Image source={require('../../assets/load.gif')} style={{height:60, width:60}}></Image>
                    </View> 
            :
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
                                    this.state.blockStatus == 'transection' ? (
                                        //console.log('okk', this.props.all_leatest_transection)
                                        this.props.all_leatest_transection != null ? (
                                        this.props.all_leatest_transection.length == undefined ? 
                                                <TransectionData 
                                                    navigation={this.props.navigation} 
                                                    all_leatest_transection={this.props.all_leatest_transection}/> 
                                            : 
                                                <TransectionData   
                                                    navigation={this.props.navigation} 
                                                    all_leatest_transection={this.props.all_leatest_transection}/>
                                        ) : 
                                        <TransectionData   
                                            navigation={this.props.navigation} 
                                            all_leatest_transection={this.props.all_leatest_transection}/>
                                    ) : < ADDWALLET navigation={this.props.navigation} />
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


const mapStateProps = (state) => {
    const all_leatest_transection = state.TRASECTION.all_transection;
    const lodder = state.TRASECTION.lodder;

    return {
        all_leatest_transection,
        lodder
    }
}

export default connect(mapStateProps)(Wallet)