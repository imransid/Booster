import React from "react";
import { Row, Col } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "../../components/Wallet/EventActivator/Loan/Styles";

const CustomRow = props => {
  return props.info == "button" ? (
    <TouchableOpacity onPress={() => props.setDetails()}>
      <Row
        style={{
          height: 30,
          borderBottomColor: "#D3D3D3",
          borderBottomWidth: 1
        }}
      >
        <Col>
          <Text>{props.name}</Text>
        </Col>
        <Col>
          <Icon
            style={{ textAlign: "right", paddingTop: 5 }}
            name={props.iconName}
            size={13}
            color="#000"
          />
        </Col>
      </Row>
    </TouchableOpacity>
  ) : (
    <Row
      style={{
        height: 30,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 1
      }}
    >
      <Col>
        <Text>{props.name}</Text>
      </Col>
      <Col>
        <Text style={{ textAlign: "right" }}>{props.amount}</Text>
      </Col>
    </Row>
  );
};

export default CustomRow;
