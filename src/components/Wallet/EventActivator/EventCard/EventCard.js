import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Label, Grid, Col, Row } from "native-base";
import ICONS from "react-native-vector-icons/Entypo";

const Event_Card = props => {
  return (
    <TouchableOpacity onPress={() => props.Nav.navigate(props.Event_Name)}>
      <Card style={{ height: 50 }}>
        <Grid>
          <Row style={{ paddingTop: 12 }}>
            <Col style={{ width: "10%", alignItems: "center" }}>
              <ICONS name="controller-record" size={18} color="#1A1EEF" />
            </Col>
            <Col>
              <Label style={{ color: "#000000" }}>
                {props.Event_Name == "LOANCALCULATOR"
                  ? "Loan Calculator"
                  : props.Event_Name}
              </Label>
            </Col>
            <Col style={{ width: "10%", alignItems: "center" }}>
              <ICONS name="chevron-right" size={20} color="#1A1EEF" />
            </Col>
          </Row>
        </Grid>
      </Card>
    </TouchableOpacity>
  );
};

export default Event_Card;
