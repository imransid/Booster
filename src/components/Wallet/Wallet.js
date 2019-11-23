import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, Image, AsyncStorage } from "react-native";
import {Label, Container, Content, Header, Grid, Row, Button} from 'native-base';
import TransectionData from "./Transection/Transection";
import ADDWALLET from "./AddWallet/AddWallet";
import styles from "./Styles";
import { letast_transection } from "../../actions/Transection";
import TransectionCustomCard from "./CustomCard/TransectionCustomCard";
import {Loged_init_setting} from "../../actions/Setting";

class Wallet extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            pressStatus: 'transection',
            blockStatus: 'transection',
            walletId: '',
            user: ''
          }
        this.navigationWillFocusListener = props.navigation.addListener('willFocus', () => {
           if(this.props.refreshforsettingupdate == true){
                this.props.lodder == true ? this.reLOadData() : null;
           }
        });
    }

    // refreshUser = () => this.setState({user: 'admin'})

    async LoginChker(){
        try{
    
            const logged = await AsyncStorage.multiGet(['LoginStatus']);
            let status = false;
            logged[0][1] != 1 ? null : this.props.dispatch(Loged_init_setting(status));
            //this.reLOadData();

        }catch{
            console.log('LoginChker() AsyncStorage problem')
        }
        
    }

    componentDidMount(){ 
        this.LoginChker() 
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
                    'card_holder_name': this.props.name,
                    'bank_code': 'Initial Card',
                    'balance': 0,
                    'avalible_balance': 0,
                    'balance_type': 'CRADIT',
                    'wallet_add_date': '01-12-2019',
                    'card_num': '0000',
                    'wallet_id': 'Testing',
                    'syncStatus': false
                }
                
                AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
                    this.props.dispatch(letast_transection(result.wallet_id))
                });
            }  
        })
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.loadedData == true){
            if(nextProps.name !== undefined){
                nextProps.lodder == true ? this.reLOadData() : null
            }else{
                null
            }
        }

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
            <Container style={styles.defaultWalletContet}>
                    
                    <Header style={styles.defaultHeaderBlock}>
                        <View style={ styles.walletHomeHeight }>
                        {
                            this.props.all_walllet_card == null ? alert("!No Wallet Found. Please Add Wallet") : <TransectionCustomCard card_data={this.props.all_walllet_card}/> 
                        }
                        <View style={styles.defaultHeaderBlockCard}>
                            <View style={{flexDirection: "row"}}>
                                <View style={ styles.walletHomeTabBlock }>
                                        <Button block style={ this.state.pressStatus == "transection"
                                        ? styles.buttonPress
                                        : styles.button }
                                        onPress= {() => this.ADD_transection()} >
                                            <Label style={ this.state.pressStatus == "transection"
                                        ? styles.buttonPressTextColor
                                        : styles.buttonTextColoris }>
                                                Transection
                                            </Label>
                                        </Button>
                                </View>
                                <View style={ styles.walletHomeTabBlock }>
                                        <Button block style={ this.state.pressStatus == "wallet"
                                        ? styles.buttonPress
                                        : styles.button }
                                        onPress={()=>this.ADD_WALLET()} >
                                            <Label style={ this.state.pressStatus == "transection"
                                        ? styles.buttonTextColoris
                                        : styles.buttonPressTextColor }>
                                                Wallet Details
                                            </Label>
                                        </Button>
                                </View>

                            </View>
                        </View>


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

            </Container>
            
        )
    }
}


const mapStateProps = (state) => {

    const wallet_details = state.TRASECTION.wallet_detaits;
    const refreshforsettingupdate = state.TRASECTION.refreshforsettingupdate; 
    const all_leatest_transection = state.TRASECTION.all_transection;
    const all_walllet_card = state.TRASECTION.all_walllet_card;
    const lodder = state.TRASECTION.lodder;
    const SyncStatus = state.TRASECTION;
    const name = state.SETTING.name;
    const loadedData = state.SETTING.loadedData;
    const logstatus = state.SETTING.logstatus;
    const userpic = state.SETTING.userpic;
    return {
        logstatus,
        userpic,
        all_leatest_transection,
        lodder,
        all_walllet_card,
        wallet_details,
        name,
        loadedData,
        refreshforsettingupdate
        //SyncStatus
    }
}

export default connect(mapStateProps)(Wallet)