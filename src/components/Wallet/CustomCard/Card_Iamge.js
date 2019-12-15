import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { Card, Text } from "native-base";

export class CustomTransectionCustomCard extends Component {
  render() {
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
  }
}
