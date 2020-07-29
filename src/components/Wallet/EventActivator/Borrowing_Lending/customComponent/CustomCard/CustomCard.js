import React, { Component, useState } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { Card, View, Grid, Row, Col } from "native-base";

const CustomCard = (props) => {
  return (
    <Card style={{ height: 48, marginBottom: 8 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.1, backgroundColor: props.color }}></View>
        <View
          style={{
            flex: 0.6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 150 / 2,
              overflow: "hidden",
            }}
            source={require("../../../../../assets/images/test1.jpg")}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Grid>
            <Row>
              <Text style={{ color: "#366DA5" }}>
                Nahid Hasan Nafi (Creditor)
              </Text>
            </Row>
            <Row>
              <Text style={{ color: "#43A047", fontSize: 12 }}>
                Borrow 6,000{" "}
              </Text>
            </Row>
            <Row>
              <Col>
                <Text style={{ fontSize: 11 }}>Since </Text>
              </Col>
              <Col style={{ width: "80%" }}>
                <Text style={{ color: "#366DA5", fontSize: 10 }}>
                  05-05-2020
                </Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: props.color,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 50,
            }}
          >
            <Text style={{ color: "#FFF" }}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default CustomCard;
