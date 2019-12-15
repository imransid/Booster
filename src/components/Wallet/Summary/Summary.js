import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Container } from "native-base";
import HeaderMenu from "../ComponentHeader/HeaderMenu";
import styles from "./Styles";
import SUMMARY_CARD from "./SummaryView";

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Summary"
    };
  }
  render() {
    return (
      <Container>
        <HeaderMenu props={this.props} title={this.state.title} />
        <ScrollView style={styles.Summary_content}>
          <SUMMARY_CARD
            title={"Today"}
            dateString={"15/12/2019"}
            expense={"8,0000"}
            balance={"9,0000"}
            cardId={"BRAC BANK"}
          />
          <SUMMARY_CARD
            title={"This Week"}
            dateString={"12/11/2019 20/12/2019"}
            expense={"8,0000"}
            balance={"9,0000"}
            cardId={"CITY BANK"}
          />
          <SUMMARY_CARD
            title={"Month"}
            dateString={"December"}
            expense={"8,0000"}
            balance={"9,0000"}
            cardId={"CITY BANK"}
          />
          <SUMMARY_CARD
            title={"Year"}
            dateString={"2019"}
            expense={"8,0000"}
            balance={"9,0000"}
            cardId={"CITY BANK"}
          />
        </ScrollView>
      </Container>
    );
  }
}
