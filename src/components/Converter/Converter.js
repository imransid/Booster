import React, {Component} from "react";
import { View, Text } from "react-native";
import { convert } from "../../actions/Convert";
import { connect } from 'react-redux';

class Converter extends Component {

    componentDidMount(){

        this.props.dispatch(convert(25))
    }

    render(){
        return(
            <View>
                <Text>
                    OKKKKKKKKKKKKKKKKKKK
                </Text>
            </View>

        );
    }
}

const mapStateToProps = (state) => {

    console.log('state', state)



//     const baseCurrency = state.currencies.baseCurrency;
//     const quoteCurrency = state.currencies.quoteCurrency;
//     const conversionResult = state.currencies.conversions_quote;
//     const rate = state.currencies.conversions_base * state.currencies.conversions_quote;
//     const actionName = state.currencies.actionName;
//     const valueArray = state.currencies.valueArray;
//     const addChangeData = state.currencies.addChangeData;
//     const currenTinputValue = state.currencies.currenTinputValue.toString();
//     const ShowingStarReal = state.currencies.ShowingStarReal;
//     const isHiddenBox = state.currencies.isHiddenBox;
    const NowBoxValue = "one";
//     const ShowourView = state.currencies.ShowourView;
//     const amount = state.currencies.amount;
//     const language = state.settingReducer.currentLanguage;
//     const fetchTime = state.currencies.fetchTime;
  
    return {
      NowBoxValue,
    };
  };
   export default connect(mapStateToProps)(Converter);