import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Card, View } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import moment from "moment";

let check = moment(new Date());

let Current_month = check.format("MMMM");

const CusTomText = props => {
  return (
    <Text
      style={{
        fontFamily: "Audrey-Bold",
        color: props.name == "Add Expence" ? "#000" : "#FFF",
        textAlign: "center",
        fontSize: 18
      }}
    >
      {props.name}
    </Text>
  );
};

const CustomCard = props => {
  return (
    <Card
      style={{
        backgroundColor: props.name == "Add Expence" ? "#FFA000" : "#0091EA",
        padding: 10
      }}
    >
      <TouchableOpacity onPress={() => alert("okkk")}>
        <CusTomText name={props.name} />
      </TouchableOpacity>
    </Card>
  );
};

const MCM_Details = props => {
  const title = "Monthly Cost Management";

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <View style={{ flex: 1, padding: 10, backgroundColor: "red" }}></View>
    </Container>
  );
};

export default MCM_Details;
