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
      <TouchableOpacity
        onPress={() =>
          props.name == "Add Expence"
            ? props.nav.navigate("AddMCM")
            : props.nav.navigate("MCM_Details", { session: props.sess })
        }
      >
        <CusTomText name={props.name} />
      </TouchableOpacity>
    </Card>
  );
};

const MCM = props => {
  const title = "Monthly Cost Management";

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <View style={{ flex: 1, padding: 10 }}>
        <CustomCard name="Previous Year" nav={props.navigation} sess="p_year" />
        <CustomCard name="Curent Year" nav={props.navigation} sess="year" />
        <CustomCard
          name="Previous Month"
          nav={props.navigation}
          sess="p_month"
        />
        <CustomCard name={Current_month} nav={props.navigation} sess="month" />
        <CustomCard name="Add Expence" nav={props.navigation} />
      </View>
    </Container>
  );
};

export default MCM;
