import React from "react";
import { Card, Label, Grid, Col, Row } from "native-base";
import ICONS from "react-native-vector-icons/Entypo";

const Blank_notify = props => {
  return (
    <Card style={{ height: 90 }}>
      <Grid style={{ paddingBottom: 8, paddingTop: 14 }}>
        <Row>
          <Col style={{ width: "10%", alignItems: "center", paddingTop: 2 }}>
            <ICONS name="controller-record" size={18} color="#90ee90" />
          </Col>
          <Col>
            <Label style={{ color: "#000", fontWeight: "bold" }}>
              That's Good
            </Label>
          </Col>
        </Row>
        <Row>
          <Col style={{ width: "10%" }}></Col>
          <Col>
            <Label style={{ fontSize: 15 }}>{props.msg}</Label>
          </Col>
        </Row>
      </Grid>
    </Card>
  );
};

export default Blank_notify;
