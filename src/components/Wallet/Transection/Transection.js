import React, {Component} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import {Label, Card, Button} from 'native-base';
import CUSTOMADDCARD from "../CustomCard/CustomCard";
import { connect } from 'react-redux';
import { letast_transection } from "../../../actions/Transection";

class Transection extends Component{

    componentDidMount(){
        this.props.dispatch(letast_transection())
    }

    ADD_New_Transection = () =>{
        this.props.navigation.navigate("ADD_TRANSECTIONS")
    } 

    render(){
        return(
            <ScrollView style={{paddingBottom: 20}}>

                <CUSTOMADDCARD IconGenarater={'IC'} colorCode={'#3ACDFC'} name={'Credit Card'} iconName={'md-car'} date={'Dec, 11, 2017'} value={'$ 16'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36555'} />
                <CUSTOMADDCARD IconGenarater={'OC'} colorCode={'#F81894'} name={'Gift'} iconName={'gift'} date={'Dec, 11, 2019'} value={'$ 36.88'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#006727'} name={'Dinner'} iconName={'food'} date={'Dec, 11, 2019'} value={'$ 500'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />
                <CUSTOMADDCARD IconGenarater={'MCI'} colorCode={'#808000'} name={'Shoping'} iconName={'shopify'} date={'Dec, 11, 2019'} value={'$ 36'} />

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

const mapStateProps = (state) => {
    return {

    }
}

export default connect(mapStateProps)(Transection)