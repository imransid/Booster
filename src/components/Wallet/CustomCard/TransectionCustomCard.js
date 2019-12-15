import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { Card, Text } from "native-base";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { letast_transection } from "../../../actions/Transection";

const CustomTransectionCustomCard = props => {
  if (props.data.bank_code == "BRAC BANK") {
    return (
      <ImageBackground
        source={require("../../../assets/images/card4.png")}
        style={{ width: 380, height: 220 }}
      >
        <View style={{ width: "100%", paddingTop: 10 }}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 20,
              fontWeight: "800",
              color: "#FFF",
              marginRight: 10,
              fontFamily: "Raleway"
            }}
          >
            {props.data.bank_code}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 90,
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "900",
                color: "#FFDF00",
                fontFamily: "Raleway",
                marginRight: 8
              }}
            >
              **** **** ****
            </Text>
            <Text
              style={{
                fontFamily: "Raleway",
                color: "#FFDF00",
                fontSize: 17,
                fontWeight: "900",
                marginTop: 6.5
              }}
            >
              {props.data.card_num}
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "900", color: "#A9A9A9" }}>
            {props.data.card_holder_name}
          </Text>
        </View>
      </ImageBackground>
    );
  } else if (props.data.bank_code == "CITY BANK") {
    // when card is city bank
    return (
      <ImageBackground
        source={require("../../../assets/images/card2.png")}
        style={{ width: 380, height: 220 }}
      >
        <View style={{ width: "100%", paddingTop: 10 }}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 20,
              fontWeight: "800",
              color: "#FFF",
              marginRight: 10,
              fontFamily: "Raleway"
            }}
          >
            {props.data.bank_code}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 90,
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "900",
                color: "#A9A9A9",
                fontFamily: "Raleway",
                marginRight: 8
              }}
            >
              **** **** ****
            </Text>
            <Text
              style={{
                fontFamily: "Raleway",
                color: "#A9A9A9",
                fontSize: 17,
                fontWeight: "900",
                marginTop: 6.5
              }}
            >
              {props.data.card_num}
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "900", color: "#A9A9A9" }}>
            {props.data.card_holder_name}
          </Text>
        </View>
      </ImageBackground>
    );
  } else {
    // when other card
    return (
      <ImageBackground
        source={require("../../../assets/images/card3.png")}
        style={{ width: 375, height: 220 }}
      >
        <View style={{ width: "100%", paddingTop: 10 }}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 20,
              fontWeight: "800",
              color: "#FFF",
              marginRight: 10,
              fontFamily: "Raleway"
            }}
          >
            {props.data.bank_code}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 90,
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "900",
                color: "#A9A9A9",
                fontFamily: "Raleway",
                marginRight: 8
              }}
            >
              **** **** ****
            </Text>
            <Text
              style={{
                fontFamily: "Raleway",
                color: "#A9A9A9",
                fontSize: 20,
                fontWeight: "900",
                marginTop: 6.5
              }}
            >
              {props.data.card_num}
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "900", color: "#A9A9A9" }}>
            {props.data.card_holder_name}
          </Text>
        </View>
      </ImageBackground>
    );
  }
};

class TransectionCustomCard extends Component {
  PropsChker = () => {
    if (this.props.card_data.length == undefined) {
      return <CustomTransectionCustomCard data={this.props.card_data} />;
    } else {
      return this.props.card_data.map((e, i) => {
        return (
          // CustomTransectionCustomCard(e, key=i)
          <CustomTransectionCustomCard key={i} data={e} />
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
        this.props.dispatch(letast_transection(id));
      });
    }
  }

  render() {
    return (
      <View
        style={{
          height: 270,
          width: "100%",
          backgroundColor: "#A9A9A9",
          padding: 15
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

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BB"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const mapStateProps = state => {
  return {};
};

export default connect(mapStateProps)(TransectionCustomCard);
