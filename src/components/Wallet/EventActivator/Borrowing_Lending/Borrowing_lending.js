import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Card, View } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";

const CustomCard = props => {
  return (
    <Card
      style={{
        backgroundColor: "#FFA000",
        padding: 10,
        width: "80%"
      }}
    >
      <TouchableOpacity onPress={() => props.nav.navigate("borrow")}>
        <Text
          style={{
            fontFamily: "Audrey-Bold",
            color: "#000",
            textAlign: "center",
            fontSize: 18
          }}
        >
          {props.name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

const Borrowing_lending = props => {
  const title = "Borrowing && Lending";

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CustomCard name="Lending" nav={props.navigation} />
        <CustomCard name="Borrowing" nav={props.navigation} />
      </View>
    </Container>
  );
};

export default Borrowing_lending;
