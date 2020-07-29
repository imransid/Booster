import React, { Component, useState } from "react";
import { Text } from "react-native";
import { Row, Col } from "native-base";

const Remaining = (props) => {
  return (
    <Row style={{ paddingTop: 7 }}>
      <Col>
        <Text style={{ color: "#000", fontSize: 13 }}>Remaining</Text>
      </Col>
      <Col>
        <Text
          style={{
            color: "#000",
            fontSize: 13,
            textAlign: "right",
            color: "#6A0DAD",
          }}
        >
          12000
        </Text>
      </Col>
    </Row>
  );
};

export default Remaining;
