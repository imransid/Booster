import React, { Component, useState } from "react";
import { Text } from "react-native";
import { Row, Col } from "native-base";

const TotalAmount = (props) => {
  return (
    <Row style={{ paddingTop: 7 }}>
      <Col>
        <Text style={{ color: "#000", fontSize: 13 }}>Total Borroe Amount</Text>
        <Text style={{ color: "#000", fontSize: 13 }}>Paid</Text>
      </Col>
      <Col style={{ borderBottomWidth: 1, borderBottomColor: "#C3C3C3" }}>
        <Text
          style={{
            color: "#000",
            fontSize: 13,
            textAlign: "right",
            color: "green",
          }}
        >
          12000
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 13,
            textAlign: "right",
            color: "red",
          }}
        >
          0
        </Text>
      </Col>
    </Row>
  );
};

export default TotalAmount;
