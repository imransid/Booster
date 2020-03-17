import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Label, Grid, Col, Row } from "native-base";
import ICONS from "react-native-vector-icons/Entypo";

const Event_Card = props => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.Nav.navigate(
          props.Event_Name == "BORROWING & LENDING"
            ? "borrow_lending"
            : props.Event_Name == "ADD BORROW LIST"
            ? "add_borrow_list"
            : props.Event_Name
        )
      }
    >
      <Card
        style={{
          height: 50,
          backgroundColor:
            props.Event_Name == "ADD BORROW LIST" ? "#1A1EEF" : "#FFF"
        }}
      >
        <Grid>
          <Row style={{ paddingTop: 12 }}>
            <Col style={{ width: "10%", alignItems: "center" }}>
              <ICONS
                name={
                  props.Event_Name == "ADD BORROW LIST"
                    ? "plus"
                    : "controller-record"
                }
                size={18}
                color={
                  props.Event_Name == "ADD BORROW LIST" ? "#FFF" : "#1A1EEF"
                }
              />
            </Col>
            <Col>
              <Label
                style={{
                  color:
                    props.Event_Name == "ADD BORROW LIST" ? "#FFF" : "#000000",
                  fontFamily: "Audrey-Bold"
                }}
              >
                {props.Event_Name == "LOANCALCULATOR"
                  ? "LOAN CALCULATOR"
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
