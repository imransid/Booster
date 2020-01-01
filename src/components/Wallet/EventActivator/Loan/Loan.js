import React, { Component } from "react";
import { Container, View, Footer } from "native-base";
import { ScrollView } from "react-native";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import { connect } from "react-redux";
import BLaNK_Notify from "../BankNotityCard/Blank_Notify";
import styles from "./Styles";
import ADDLOAN from "./addLoan";
import CUSFOOTER from "./customFooterLoan";

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "LOAN",
      input_focus: false
    };
  }

  add_New_load = () => {
    this.setState({
      title: "Add Loan"
    });
  };

  text_on_focus = () => {
    this.setState({
      input_focus: true
    });
  };

  text_on_blur = () => {
    this.setState({
      input_focus: false
    });
  };

  customCencel = () => {
    console.log("okoaskdoaskd");
    this.setState({
      title: "LOAN"
    });
  };

  render() {
    return (
      <Container>
        <HeaderMenu props={this.props} title={this.state.title} />
        <View style={styles.bank_scroll}>
          <BLaNK_Notify msg={"You Don't have any current loan right now."} />
        </View>
        {this.state.title == "Add Loan" ? (
          <ADDLOAN
            text_on_focus={() => this.text_on_focus()}
            text_on_blur={() => this.text_on_blur()}
            customCencel={() => this.customCencel()}
          />
        ) : null}

        {/*this.state.input_focus == false ? (*/
        this.state.title == "LOAN" ? (
          <View style={{ flex: 1 }}>
            <ScrollView></ScrollView>
            <Footer style={styles.footerCus}>
              <CUSFOOTER cus_func={() => this.add_New_load()} cencel={true} />
            </Footer>
          </View>
        ) : null}
      </Container>
    );
  }
}
const mapStateProps = state => {
  return {};
};

export default connect(mapStateProps)(Loan);
