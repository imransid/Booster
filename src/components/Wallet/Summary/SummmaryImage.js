import React, { Component } from "react";
import { View, ImageBackground, AsyncStorage } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import styles from "./Styles";
import { Text, Col, Row, Label } from "native-base";
import {
  Summary_Today,
  Summary_Week,
  Summary_Month,
  Summary_Year
} from "../../../actions/Summary";

const CustomTransectionCustomCard = props => {
  if (props.data.bank_code == "BRAC BANK") {
    return (
      <ImageBackground
        source={require("../../../assets/images/card_summary_1.png")}
        style={styles.Summary_card_Image}
      >
        <Col>
          <Row>
            <Label style={styles.Summary_card_Image_Text_1}>Wallet ID</Label>
          </Row>
          <Row>
            <Text style={styles.Summary_card_Image_Text_2}>{props.cardID}</Text>
          </Row>
        </Col>
      </ImageBackground>
    );
  } else if (props.data.bank_code == "CITY BANK") {
    // when card is city bank
    return (
      <ImageBackground
        source={require("../../../assets/images/card_summary_1.png")}
        style={styles.Summary_card_Image}
      >
        <Col>
          <Row>
            <Label style={styles.Summary_card_Image_Text_1}>Wallet ID</Label>
          </Row>
          <Row>
            <Text style={styles.Summary_card_Image_Text_2}>{props.cardID}</Text>
          </Row>
        </Col>
      </ImageBackground>
    );
  } else {
    // when other card
    return (
      <ImageBackground
        source={require("../../../assets/images/card_summary_1.png")}
        style={styles.Summary_card_Image}
      >
        <Col>
          <Row>
            <Label style={styles.Summary_card_Image_Text_1}>Wallet ID</Label>
          </Row>
          <Row>
            <Text style={styles.Summary_card_Image_Text_2}>{props.cardID}</Text>
          </Row>
        </Col>
      </ImageBackground>
    );
  }
};

class SummmaryImage extends Component {
  PropsChker = () => {
    if (this.props.card_data.length == undefined) {
      return (
        <CustomTransectionCustomCard
          data={this.props.card_data}
          cardID={this.props.cardID}
        />
      );
    } else {
      return this.props.card_data.map((e, i) => {
        return (
          <CustomTransectionCustomCard
            key={i}
            data={e}
            cardID={this.props.cardID}
          />
        );
      });
    }
  };

  _onMomentumScrollEnd(e, state, context) {
    if (this.props.card_data.length == undefined) {
      console.log("result", state.index);
    } else {
      AsyncStorage.getItem("wallet@Card").then(e => {
        let data_load = JSON.parse(e);
        let id = data_load[state.index].wallet_id;
        let bank_code = data_load[state.index].bank_code;

        if (this.props.Action == "Today") {
          this.props.dispatch(Summary_Today(id, bank_code));
        } else if (this.props.Action == "This Week") {
          this.props.dispatch(Summary_Week(id, bank_code));
        } else if (this.props.Action == "Month") {
          this.props.dispatch(Summary_Month(id, bank_code));
        } else if (this.props.Action == "Year") {
          this.props.dispatch(Summary_Year(id, bank_code));
        }
      });
    }
  }

  render() {
    return (
      <View
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Swiper
          showsButtons={false}
          index={0}
          onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
        >
          {this.props.card_data != null ? this.PropsChker() : null}
        </Swiper>
      </View>
    );
  }
}

const mapStateProps = state => {
  const card_data = state.TRASECTION.all_walllet_card;

  return {
    card_data
  };
};

export default connect(mapStateProps)(SummmaryImage);
