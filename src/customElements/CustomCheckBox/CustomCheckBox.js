import React from "react";
import { Row, Col } from "native-base";
import { Text, View } from "react-native";
import styles from "../../components/Wallet/EventActivator/Loan/Styles";

const CustomCheckBox = props => {
  return (
    <Row>
      <Col
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: props.color
          }}
        ></View>
      </Col>
      <Col
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{props.info}</Text>
      </Col>
    </Row>
  );
};

export default CustomCheckBox;
