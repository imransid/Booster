import React, {Component} from "react";
import { Text, View, Image } from "react-native";
import { Thumbnail } from 'native-base';
import MENU from '../../Menu/MenuButtons';
import { connect } from 'react-redux';
//import stylesTran from "./Styles";

class HeaderMenu extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{height: 60, width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row'}}>
                        <View style={{ width: '20%', alignItems: 'center', paddingTop: 15 }}>
                            <MENU navigation={this.props.props.navigation}/>
                            {/* <Image source={require("../../../assets/images/hamburger.png")}/> */}
                        </View>
                        <View style={{ width: '60%', paddingTop: 17, }}>
                            <Text style={{fontWeight: '900', fontSize: 18}}>
                                {
                                    this.props.title
                                }
                            </Text>
                        </View>
                        <View style={{ width: '20%', alignItems: 'center', paddingTop: 8 }}>
                            <Thumbnail style={{width: 43, height: 43, borderColor: '#6A0DAD', borderWidth: 2}} source={{uri: `data:image/png;base64,${this.props.userpic}`}}/>
                        </View>
            </View>
        )
    }
}

const mapStateProps = (state) => {

    const userpic = state.SETTING.userpic;

    return {
        userpic
        //SyncStatus
    }
}

export default connect(mapStateProps)(HeaderMenu)