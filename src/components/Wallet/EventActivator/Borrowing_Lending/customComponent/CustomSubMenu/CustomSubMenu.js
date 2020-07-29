import React, { Component, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, Grid, Col } from "native-base";
import S_Icon from "react-native-vector-icons/MaterialCommunityIcons";
import F_Icon from "react-native-vector-icons/FontAwesome";

const CustomSubMenu = (props) => {
  return (
    <Card style={{ flex: 1 }}>
      <Grid style={{ paddingTop: 7, paddingBottom: 7 }}>
        <Col style={{ paddingRight: 12, paddingLeft: 12 }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#D3D3D3",
              flexDirection: "row",
            }}
            disabled={true}
          >
            <F_Icon name={"bullseye"} />
            <Text style={{ color: "#000" }}> Timeline</Text>
          </TouchableOpacity>
        </Col>
        <Col style={{ paddingRight: 12, paddingLeft: 12 }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#D3D3D3",
              flexDirection: "row",
            }}
          >
            <S_Icon name={"sort-descending"} />
            <Text style={{ color: "#000" }}> Active</Text>
          </TouchableOpacity>
        </Col>
        <Col></Col>
      </Grid>
    </Card>
  );
};

export default CustomSubMenu;
