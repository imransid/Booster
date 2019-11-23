import React, { Component } from 'react';
import { View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { Icon, Container, Header, Content, Body, Title, Right, Left } from 'native-base'
import Rootnavigator from './Tabnavigator/Tabnavigator';
import HeaderMenu from '../Wallet/ComponentHeader/HeaderMenu';


class walletHomeScreen extends Component {
    
    constructor(props) {
        super(props);
    }

    
    render() {
        let title = "Wallet";
        return (
            <View style={{flex: 1}}>
                <HeaderMenu props={this.props} title={title} />
                <Rootnavigator />
            </View>
        );
    }
}

// function mapStateToProps(state) {
//     return ({
//         MarketStaus: state.browseReducer.MarketActive,
//         fetchRealTime: state.browseReducer.fetchRealTime   
//     })
// } {/* <Rootnavigator /> */}


// function mapDispatchToProps(dispatch) {
//     return ({
//         browseAction: () => {
//             dispatch(browseAction())
//         }
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(walletHomeScreen);

export default walletHomeScreen;