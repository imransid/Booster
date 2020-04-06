import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Grid, Row, Col } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import ICONS from "react-native-vector-icons/Entypo";

const Custom_Row = props => {
  return (
    <Row>
      <Text
        style={{
          textAlign: props.position,
          width: "100%",
          fontFamily: props.cusFont,
          color: props.cusCode
        }}
      >
        {props.text}
      </Text>
    </Row>
  );
};

const Custom_Card = props => {
  let CardNum = props.data.card_name.substr(-4);
  let Card_Name = props.data.card_name.substring(0, 10);

  let CardName = Card_Name + " ( " + CardNum + " ) ";

  return (
    <Card style={{ padding: 5 }}>
      <Grid>
        <Col style={{ width: "25%" }}>
          <Custom_Row
            text={"EMI " + props.count}
            position="left"
            cusFont="Amiko-Bold"
            cusCode="#3AB4B7"
          />
          <Custom_Row
            text={props.data.title}
            position="left"
            cusFont="Alef-Regular"
            cusCode="#787878"
          />
        </Col>
        <Col style={{ width: "40%" }}>
          <Row style={{ height: "50%" }}></Row>
          <Custom_Row
            text={CardName}
            position="center"
            cusFont="Alef-Regular"
            cusCode="#787878"
          />
        </Col>
        <Col style={{ width: "35%" }}>
          <Custom_Row
            text={props.data.amount.toString()}
            position="right"
            cusFont="Alef-Regular"
            cusCode="#787878"
          />
          <Custom_Row
            text={props.data.months}
            position="right"
            cusFont="Alef-Regular"
            cusCode="#787878"
          />
        </Col>
      </Grid>
    </Card>
  );
};

// For Dynamic Icons
const IconGenaretor = props => {
  return props.Coloraction == "addemi" ? (
    <ICONS name="controller-record" size={18} color="#90ee90" />
  ) : (
    <Icon name={props.icons} size={18} color="#FFF" />
  );
};

const CusTomMSG = props => {
  return (
    <Row style={{ alignItems: "center" }}>
      <Col style={{ width: "10%" }}>
        {props.icons == "" ? null : (
          <IconGenaretor Coloraction={props.Coloraction} icons={props.icons} />
        )}
      </Col>
      <Col>
        <Text
          style={{
            fontFamily: props.icons == "" ? "Alef-Regular" : "Amiko-Bold",
            fontSize: 15,
            color: props.Coloraction == "addemi" ? "#000" : "#FFF"
          }}
        >
          {props.text}
        </Text>
      </Col>
    </Row>
  );
};

const AlertMsg = props => {
  return (
    <Card
      style={{
        flex: 1,
        padding: 5,
        backgroundColor:
          props.Coloraction == "info"
            ? "#0000FF"
            : props.Coloraction == "warning"
            ? "#BD3B1B"
            : props.Coloraction == "sucess"
            ? "#0000FF"
            : "#FFFFFF"
      }}
    >
      <CusTomMSG
        text={props.msgA}
        Coloraction={props.Coloraction}
        icons={
          props.type == "added"
            ? "check"
            : props.type == "warning"
            ? "infocirlceo"
            : props.type == "sucess"
            ? "database"
            : props.type == "info"
            ? "database"
            : ""
        }
      />
      <CusTomMSG text={props.msgB} icons={""} Coloraction={props.Coloraction} />
    </Card>
  );
};

const CusTomBox = props => {
  return (
    <Col
      style={{
        paddingLeft: props.position == "left" ? 2 : 5,
        paddingRight: props.position == "left" ? 5 : 2
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: props.position == "left" ? "#E1F5FE" : "#FFCDD2",
          borderRadius: 10,
          padding: 10
        }}
      >
        <Row style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Alef-Regular",
              color: props.position == "left" ? "#82B1FF" : "#D32F2F"
            }}
          >
            {props.info}
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              fontFamily: "Alef-Regular",
              fontSize: 22,
              color: props.position == "left" ? "#1565C0" : "#C62828"
            }}
          >
            {props.amount + " TK"}
          </Text>
        </Row>
      </View>
    </Col>
  );
};

const CusTomGrid = props => {
  return (
    <Col style={{ padding: 10 }}>
      {props.mode == "icon" ? (
        <TouchableOpacity onPress={() => props.close()}>
          <Icon
            style={{ textAlign: "right" }}
            name={"close"}
            size={22}
            color="#000"
          />
        </TouchableOpacity>
      ) : props.mode == "regular" ? (
        <Text
          style={{
            fontFamily: "Alef-Regular",
            color: props.position == "left" ? "#000" : "#1564C0",
            textAlign: props.position
          }}
        >
          {props.info}
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: "Audrey-Bold",
            fontSize: 26,
            color: "#212121"
          }}
        >
          {props.info}
        </Text>
      )}
    </Col>
  );
};

export { Custom_Card, AlertMsg, CusTomBox, CusTomGrid };
