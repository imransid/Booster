import React, { Component } from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Container, Footer, Grid, Row, Col, Header, View } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import { connect } from "react-redux";
import BLaNK_Notify from "../BankNotityCard/Blank_Notify";
import styles from "./Styles";
import ADDLOAN from "./addLoan";

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

  render() {
    return (
      <Container>
        <HeaderMenu props={this.props} title={this.state.title} />
        <View style={styles.bank_scroll}>
          <BLaNK_Notify msg={"You Don't have any current loan right now."} />
        </View>
        <ADDLOAN
          text_on_focus={() => this.text_on_focus()}
          text_on_blur={() => this.text_on_blur()}
        />

        {this.state.input_focus == false ? (
          <Footer style={styles.footerCus}>
            <Grid>
              <Row>
                <Col style={{ width: "83%" }}></Col>
                <Col>
                  <TouchableOpacity onPress={() => this.add_New_load()}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={require("../../../../assets/images/add_loan.png")}
                    />
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
          </Footer>
        ) : null}
      </Container>
    );
  }
}
const mapStateProps = state => {
  return {};
};

export default connect(mapStateProps)(Loan);
