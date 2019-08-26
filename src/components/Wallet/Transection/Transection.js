import React, {Component} from "react";
import { ScrollView } from "react-native";
import {Label, Card, Button} from 'native-base';
import CUSTOMADDCARD from "../CustomCard/CustomCard";
import { connect } from 'react-redux';

class Transection extends Component{

    constructor(props){
        super(props);
    }

    ADD_New_Transection = () =>{
        this.props.walletId == 'Testing' ?
            alert("! You Cann't Make Transection In Intial Wallet Card Please Add Your Card")
        :
            this.props.navigation.navigate("ADD_TRANSECTIONS", { walletId: this.props.walletId })
    }

    IconGenarator() {
        if(this.props.all_leatest_transection.length == undefined){
            return(
                <CUSTOMADDCARD
                    IconGenarater={this.props.all_leatest_transection.IconCode} 
                    colorCode={this.props.all_leatest_transection.colorCode} 
                    name={this.props.all_leatest_transection.description} 
                    iconName={this.props.all_leatest_transection.IconName} 
                    date={this.props.all_leatest_transection.date} 
                    value={this.props.all_leatest_transection.amount} 
                    navigation={this.props.navigation}
                    transectionid={this.props.all_leatest_transection.transectionid}
                    selectCategory={this.props.all_leatest_transection.selectCategory}/>
            )
        }else{

             return this.props.all_leatest_transection.map((e, i) => {
                return(
                    <CUSTOMADDCARD 
                        key={i}
                        IconGenarater={e.IconCode} 
                        colorCode={e.colorCode} 
                        name={e.description} 
                        iconName={e.IconName} 
                        date={e.date} 
                        value={e.amount}
                        navigation={this.props.navigation}
                        transectionid={e.transectionid}
                        selectCategory={e.selectCategory}/>
                )
            })        
        }
    }

    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>
                {
                    this.props.all_leatest_transection != null ? 
                      this.IconGenarator()
                    : null

                }

                <Card style={{borderColor : "#171818", paddingTop: 20 , height : 70, backgroundColor: "#171818"}}>
                {/* borderColor : "#3E287B", borderRadius: 5  */}
                        <Button block success onPress={ () => this.ADD_New_Transection() }>
                            <Label style={{fontWeight: "900", color: "#ffffff"}}>Add Transection</Label>
                        </Button>
                </Card>
                
            </ScrollView>
            
        )
    }
}

// export default Transection;

const mapStateProps = (state) => {

    const wallet_details = state.TRASECTION.wallet_detaits
    const all_leatest_transection = state.TRASECTION.all_transection;
    const all_walllet_card = state.TRASECTION.all_walllet_card;
    const lodder = state.TRASECTION.lodder;
    const SyncStatus = state.TRASECTION;
    const name = state.SETTING.name;
    const loadedData = state.SETTING.loadedData;
    return {
        all_leatest_transection,
        lodder,
        all_walllet_card,
        wallet_details,
        name,
        loadedData
        //SyncStatus
    }
}

export default connect(mapStateProps)(Transection)