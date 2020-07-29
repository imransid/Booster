import React, { Component, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View, Row } from "native-base";

import Icon from "react-native-vector-icons/AntDesign";

const OverView = (props) => {
  return (
    <Row style={{ borderBottomWidth: 1, borderBottomColor: "#C3C3C3" }}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={() => props.SetValue()}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#000" }}>Overview</Text>
            <Text style={{ fontSize: 12 }}>Touch to View full report</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Icon name="down" size={20} style={{ textAlign: "center" }} />
          </View>
        </View>
      </TouchableOpacity>
    </Row>
  );
};

export default OverView;
