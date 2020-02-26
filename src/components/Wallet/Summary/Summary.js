import React, { Component } from "react";
import { ScrollView, Image, View } from "react-native";
import { Container } from "native-base";
import HeaderMenu from "../ComponentHeader/HeaderMenu";
import styles from "./Styles";
import SUMMARY_CARD from "./SummaryView";
import { Summary_Retrive } from "../../../actions/Summary";
import { connect } from "react-redux";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Summary",
      loader: true
    };
  }

  componentDidMount() {
    this.props.dispatch(Summary_Retrive());
  }

  componentWillReceiveProps(nextProps) {
    nextProps.loader == false
      ? this.setState({
          loader: false
        })
      : null;
  }

  render() {
    if (this.state.loader == true) {
      return (
        <Container>
          <HeaderMenu props={this.props} title={this.state.title} />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF"
            }}
          >
            <Image
              source={require("../../../assets/loader.gif")}
              style={{ height: 330, width: 330 }}
            ></Image>
          </View>
        </Container>
      );
    } else {
      return (
        <Container>
          <HeaderMenu props={this.props} title={this.state.title} />
          <ScrollView style={styles.Summary_content}>
            <SUMMARY_CARD
              title={"Today"}
              dateString={this.props.today_data.dateString}
              expense={this.props.today_data.expence}
              balance={this.props.today_data.balance}
              cardId={this.props.today_data.cardId}
            />
            <SUMMARY_CARD
              title={"This Week"}
              dateString={this.props.weekly_data.dateString}
              expense={this.props.weekly_data.expence}
              balance={this.props.weekly_data.balance}
              cardId={this.props.weekly_data.cardId}
            />
            <SUMMARY_CARD
              title={"Month"}
              dateString={this.props.month_data.dateString}
              expense={this.props.month_data.expence}
              balance={this.props.month_data.balance}
              cardId={this.props.month_data.cardId}
            />
            <SUMMARY_CARD
              title={"Year"}
              dateString={this.props.year_data.dateString}
              expense={this.props.year_data.expence}
              balance={this.props.year_data.balance}
              cardId={this.props.year_data.cardId}
            />
          </ScrollView>
        </Container>
      );
    }
  }
}

const mapStateProps = state => ({
  today_data: state.SUMMARY.today_data,
  weekly_data: state.SUMMARY.weekly_data,
  month_data: state.SUMMARY.month_data,
  year_data: state.SUMMARY.year_data,
  loader: state.SUMMARY.loader
});

export default connect(mapStateProps)(Summary);
