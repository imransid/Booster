import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Card, View, Grid, Row, Col } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";

import { load_all_mcm_details } from "../../../../actions/EventActivator";

let check = moment(new Date());

let Current_month = check.format("MMMM");

const CusTomCol = props => {
  return (
    <Col>
      <Text
        style={{
          fontFamily: "AlexandriaFLF-Bold",
          fontSize: 14,
          color: "#000"
        }}
      >
        {props._data}
      </Text>
    </Col>
  );
};

const CustomRow = props => {
  return (
    <Row
      style={{
        padding: 5
      }}
    >
      <CusTomCol _data={props.name} />
      <CusTomCol _data={props.value} />
    </Row>
  );
};

const CustomCard = props => {
  return (
    <Card style={{ padding: 10 }}>
      <CustomRow name="Name : " value="1234" />
      <CustomRow name="Price : " value="1234" />
      <CustomRow name="Category : " value="1234" />
      <CustomRow name="Notes : " value="123445" />
    </Card>
  );
};

const MCM_Details = props => {
  const title = "Monthly Cost Management";

  // const counter = useSelector(state => state.counter)
  // const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("okokko");
    // dispatch(load_all_mcm_details());
  }, []);
  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <ScrollView style={{ height: 1400, padding: 10 }}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </ScrollView>
    </Container>
  );
};

export default MCM_Details;
