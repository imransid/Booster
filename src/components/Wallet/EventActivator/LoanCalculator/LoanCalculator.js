import React, { Component } from "react";
import { View, StatusBar, Text, TextInput } from "react-native";
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
      mothly_amonut: "00,000.00",
      Total_Payment: "00,000.00",
      Total_Interest: "00,000.00"
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
    let monthly_bill, Total_Interest, Total_Payment;
    let totalAmount = parseInt(name == "amonut" ? value : this.state.amonut);
    let interestRate = parseInt(
      name == "interest_rate" ? value : this.state.interest_rate
    );
    let DurationTime = parseInt(
      name == "duration_time" ? value : this.state.duration_time
    );

    const principal = parseFloat(totalAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(DurationTime) * 12;

    //complate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    monthly == Infinity
      ? (monthly_bill = "00,000.00")
      : monthly == 0
      ? (monthly_bill = "00,000.00")
      : monthly == NaN
      ? (monthly_bill = "00,000.00")
      : (monthly_bill = monthly.toFixed(3));

    monthly == Infinity
      ? (Total_Interest = "00,000.00")
      : monthly == 0
      ? (Total_Interest = "00,000.00")
      : monthly == NaN
      ? (Total_Interest = "00,000.00")
      : (Total_Interest = (monthly * calculatedPayments - principal).toFixed(
          2
        ));

    monthly == Infinity
      ? (Total_Payment = "00,000.00")
      : monthly == 0
      ? (Total_Payment = "00,000.00")
      : monthly == NaN
      ? (Total_Payment = "00,000.00")
      : (Total_Payment = (monthly * calculatedPayments).toFixed(2));

    this.setState({
      mothly_amonut: monthly_bill,
      Total_Interest: Total_Interest,
      Total_Payment: Total_Payment
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
          <View style={{ flex: 0.3 }}></View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#C0C0C0",
                fontFamily: "icofont",
                fontSize: 25,
                textAlign: "center"
              }}
            >
              Monthly Installment
            </Text>
            <Text style={styles.teXt_monthly}>{this.state.mothly_amonut}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#C0C0C0",
                fontFamily: "icofont",
                fontSize: 25,
                textAlign: "center"
              }}
            >
              Total Payment
            </Text>
            <Text style={styles.teXt_monthly}>{this.state.Total_Payment}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#C0C0C0",
                fontFamily: "icofont",
                fontSize: 25,
                textAlign: "center"
              }}
            >
              Total Interest
            </Text>
            <Text style={styles.teXt_monthly}>{this.state.Total_Interest}</Text>
          </View>
        </View>
      </Container>
    );
  }
}

export default LoanCalculator;
