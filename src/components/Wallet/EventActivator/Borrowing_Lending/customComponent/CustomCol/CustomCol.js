import React, { Component, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Col, Text } from "native-base";

const CustomCol = (props) => {
  return (
    <Col>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: props._status == props.name ? props.color : "#FFF",
          borderBottomWidth: 3,
        }}
        onPress={() => props.SETTER(props.name)}
      >
        <Text style={{ color: "#F0F4C3" }}>{props.name}</Text>
        <Text style={{ color: "#F0F4C3", fontSize: 12 }}>
          {props.total_amount}
        </Text>
      </TouchableOpacity>
    </Col>
  );
};

export default CustomCol;
