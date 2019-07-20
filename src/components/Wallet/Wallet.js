import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, Image, AsyncStorage } from "react-native";
import {Label, Container, Content, Header, Card, Footer, Grid, Row, Button} from 'native-base';
import  MenuDrawerBUtton  from "../Menu/MenuButtons";
import CustomFooter from "./WalletFotter/CustomFooter";
import TransectionData from "./Transection/Transection";
import ADDWALLET from "./AddWallet/AddWallet";
import styles from "./Styles";
import { letast_transection } from "../../actions/Transection";
import TransectionCustomCard from "./CustomCard/TransectionCustomCard";

class Wallet extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            pressStatus: 'transection',
            blockStatus: 'transection',
            walletId: ''
          };
    }

    componentDidMount(){
        this.reLOadData()
    }
    reLOadData = () => {
        AsyncStorage.getItem('wallet@Card').then((e) =>  {
            let data_load = JSON.parse(e);
            if(data_load != null){
                if(data_load.length == undefined){
                    let id = data_load.wallet_id;
                    this.setState({walletId: id})
                    this.props.dispatch(letast_transection(id))
                }else{
                    let id = data_load[0].wallet_id;
                    this.setState({walletId: id})
                    this.props.dispatch(letast_transection(id))

                }

            }else{
                let result = {
                    'card_holder_name': "Hello Imran",
                    'bank_code': 'Initial Card',
                    'balance': 0,
                    'avalible_balance': 0,
                    'balance_type': 'CRADIT',
                    'wallet_add_date': '01-12-2019',
                    'card_num': '000000000000',
                    'wallet_id': 'Testing'
                }
                
                AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
                    this.props.dispatch(letast_transection(result.wallet_id))
                });
            }  
        })
    }

    componentWillReceiveProps(nextProps){
        nextProps.lodder == true ? this.reLOadData() : null
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
                    <Header style={{height: 320, backgroundColor: "#171818"}}>
                        <View style={{width: '100%'}}>
                        {
                            this.props.all_walllet_card == null ? alert("!No Wallet Found. Please Add Wallet") : <TransectionCustomCard card_data={this.props.all_walllet_card}/> 
                        }
                        <Card style={{backgroundColor : "#282A29", height: 50, borderColor: "#282A29"}}>
                            <View style={{flexDirection: "row"}}>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                        <Button block style={ this.state.pressStatus == "transection"
                                        ? styles.buttonPress
                                        : styles.button }
                                        onPress= {() => this.ADD_transection()} >
                                            <Label style={{color: "white"}}>
                                                Transection
                                            </Label>
                                        </Button>
                                </View>
                                <View style={{width: "50%", height: "100%", alignItems: "center"}}>
                                        <Button block style={ this.state.pressStatus == "wallet"
                                        ? styles.buttonPress
                                        : styles.button }
                                        onPress={()=>this.ADD_WALLET()} >
                                            <Label style={{color: "white"}}>
                                                Wallet details
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
                                        this.props.all_leatest_transection !== null ? (
                                        this.props.all_leatest_transection.length == undefined ? 
                                                <TransectionData
                                                    walletId={this.state.walletId} 
                                                    navigation={this.props.navigation} 
                                                    all_leatest_transection={this.props.all_leatest_transection}/> 
                                            : 
                                                <TransectionData
                                                    walletId={this.state.walletId}
                                                    navigation={this.props.navigation} 
                                                    all_leatest_transection={this.props.all_leatest_transection}/>
                                        ) : 
                                        <TransectionData
                                            walletId={this.state.walletId}
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

    const wallet_details = state.TRASECTION.wallet_detaits
    const all_leatest_transection = state.TRASECTION.all_transection;
    const all_walllet_card = state.TRASECTION.all_walllet_card;
    const lodder = state.TRASECTION.lodder;

    return {
        all_leatest_transection,
        lodder,
        all_walllet_card,
        wallet_details
    }
}

export default connect(mapStateProps)(Wallet)