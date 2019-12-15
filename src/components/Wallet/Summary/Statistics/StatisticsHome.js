import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";
import { Container, Content } from "native-base";
import { connect } from "react-redux";

import currencyCharacter from "../CurrencyConverter/CurrencyList/RawCurrencyData/flag";

import _ from "lodash";
import StatisticsView from "./StatisticsView";
import Loading from "../Loading";
import { retrive_summary } from "../../actions/StatisticsHome";

class StatisticsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataAvailable: false,
      assetBaseCharacter: currencyCharacter.character["USD"]
    };

    this.navigationWillFocusListener = props.navigation.addListener('willFocus', () => {
      
        this.props.dispatch(retrive_summary());
        
      });
  }

//   componentDidMount() {
//     this.props.dispatch(retrive_summary());
//   }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading == false) {
      nextProps.dataAvailable.length > 0
        ? (DataActive = true)
        : (DataActive = false);
      this.setState({
        loading: false,
        dataAvailable: DataActive
      });
    }
  }

  render() {
    StatusBar.setBackgroundColor("#171b21", true);

    return (
      <Container>
        {this.state.loading ? (
          <Loading />
        ) : this.state.dataAvailable ? (
          <Content style={{ flex: 1, backgroundColor: "#1f2630" }}>
            <StatisticsView
              assetBaseCharacter={this.state.assetBaseCharacter}
            />
          </Content>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1f2630"
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
                color: "white",
                textAlign: "center"
              }}
            >
              {this.props.language.summary.Please_add_a_wallet_to_see_summary}
            </Text>
          </View>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.summary.loaderOn,
    language: state.settingReducer.language_strings,
    dataAvailable: state.summary.dataAvailable
  };
}

export default connect(mapStateToProps)(StatisticsHome);
