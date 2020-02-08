import React, { Component } from "react";
import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput
} from "react-native";
import { Container } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import CustomSlider from "../../EventActivator/LoanCalculator/CustomSlider/CustomSlider";
import styles from "./styles";

class LoanCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Loan Calculator",
      amonut: 0,
      interest_rate: 0,
      duration_time: 0,
      mothly_amonut: "00,000.00"
    };
  }

  _setStateNow = (name, value) => {
    name == "interest_rate"
      ? this.setState({
          interest_rate: value
        })
      : name == "amonut"
      ? this.setState({
          amonut: value
        })
      : this.setState({
          duration_time: value
        });
    this._interest_calculation(name, value);
  };

  _interest_calculation = (name, value) => {
    let totalAmount = parseInt(name == "amonut" ? value : this.state.amonut);
    let interestRate = parseInt(
      name == "interest_rate" ? value : this.state.interest_rate
    );
    let DurationTime = parseInt(
      name == "duration_time" ? value : this.state.duration_time
    );

    let resultInterest = (interestRate / 100) * totalAmount;
    let resultInterestWithMonth = resultInterest * DurationTime;
    let Total_Amount_Now = resultInterestWithMonth + totalAmount;

    let monthly_bill = Total_Amount_Now / DurationTime;

    monthly_bill == Infinity
      ? (monthly_bill = "00,000.00")
      : (monthly_bill = monthly_bill.toFixed(3));

    this.setState({
      mothly_amonut: monthly_bill
    });
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <HeaderMenu props={this.props} title={this.state.title} />
        <View style={{ flex: 0.5 }}></View>
        {/* Enter Amount BLock */}
        <View
          style={{
            flex: 1.3,
            paddingLeft: 23
          }}
        >
          <View
            style={{
              flex: 0.6,
              justifyContent: "flex-end"
            }}
          >
            <Text style={{ fontFamily: "icofont" }}>Enter Amount</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Enter Total Amount "
              onChangeText={e => this._setStateNow("amonut", e)}
            />
          </View>
        </View>
        {/* End Enter Amount Block */}

        {/* Enter Interest BLock */}
        <CustomSlider
          name="Interest Rate"
          setStateNow={e => this._setStateNow("interest_rate", e)}
        />
        {/* End Enter Interest Block */}

        {/* Enter Duration BLock */}
        <CustomSlider
          name="Duration"
          setStateNow={e => this._setStateNow("duration_time", e)}
        />
        {/* Enter Duration BLock */}

        <View
          style={{
            flex: 3,
            backgroundColor: "#5A24A8",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "icofont",
              fontSize: 25,
              textAlign: "center"
            }}
          >
            Monthly Installment
          </Text>
          <Text style={styles.teXt_monthly}>{this.state.mothly_amonut}</Text>
        </View>
      </Container>
    );
  }
}

export default LoanCalculator;
