import React from "react";
import { Text } from "react-native";
import { Row, Col } from "native-base";
import { useSelector } from "react-redux";

const Remaining = () => {
  const remaining_overview = useSelector(
    (state) => state.EVENT_AC.remaining_overview
  );
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
          {remaining_overview}
        </Text>
      </Col>
    </Row>
  );
};

export default Remaining;
