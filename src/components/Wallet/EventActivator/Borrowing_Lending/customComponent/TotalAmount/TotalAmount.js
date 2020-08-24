import React from "react";
import { Text } from "react-native";
import { Row, Col } from "native-base";
import { useSelector } from "react-redux";

const TotalAmount = (props) => {
  const paid_overview = useSelector((state) => state.EVENT_AC.paid_overview);
  const total_overview = useSelector((state) => state.EVENT_AC.total_overview);
  return (
    <Row style={{ paddingTop: 7 }}>
      <Col>
        <Text style={{ color: "#000", fontSize: 13 }}>
          Total {props.name} Amount
        </Text>
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
          {total_overview}
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 13,
            textAlign: "right",
            color: "red",
          }}
        >
          {paid_overview}
        </Text>
      </Col>
    </Row>
  );
};

export default TotalAmount;
