import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Container } from "native-base";
import HeaderMenu from "../ComponentHeader/HeaderMenu";
import { connect } from "react-redux";
import EVNTCARD from "./EventCard/EventCard";

class EventActivator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Event Activator"
    };
  }
  render() {
    return (
      <Container>
        <HeaderMenu props={this.props} title={this.state.title} />
        <ScrollView style={{ padding: 20 }}>
          <EVNTCARD Event_Name={"LOAN"} Nav={this.props.navigation} />
          <EVNTCARD Event_Name={"EMI"} Nav={this.props.navigation} />
          <EVNTCARD Event_Name={"DEPOSITE"} Nav={this.props.navigation} />
        </ScrollView>
      </Container>
    );
  }
}
const mapStateProps = state => {
  return {};
};

export default connect(mapStateProps)(EventActivator);
