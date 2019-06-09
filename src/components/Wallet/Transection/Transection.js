import React, {Component} from "react";
import { ScrollView } from "react-native";
import {Label, Card, Button} from 'native-base';
import CUSTOMADDCARD from "../CustomCard/CustomCard";


class Transection extends Component{

    constructor(){
        super();
    }

    ADD_New_Transection = () =>{
        this.props.navigation.navigate("ADD_TRANSECTIONS")
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
                    value={this.props.all_leatest_transection.amount} />
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
                        value={e.amount} />
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

export default Transection;