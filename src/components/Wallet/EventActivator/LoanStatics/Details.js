import React from "react";
import { Row, Col, View, Grid } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Styles";
import CustomCheckBox from "../../../../customElements/CustomCheckBox/CustomCheckBox";

const CustomCol = props => {
  return (
    <Col
      style={{
        borderRightWidth:
          props.info == "date" ? 2 : props.info == "amount" ? 2 : 0,
        borderRightColor: "#000",
        borderLeftColor: "#000",
        borderLeftWidth: props.info == "date" ? 2 : 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          props.status == "header"
            ? "#FFF"
            : props.chk == "paid"
            ? "green"
            : "#FF8800"
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: props.status == "header" ? "#000" : "#FFF",
          fontFamily: props.status == "header" ? "Amiko-Bold" : "Amiko-Regular"
        }}
      >
        {props.data}
      </Text>
    </Col>
  );
};

const CusTomRow = props => {
  return (
    <Row
      style={{
        borderColor: "#000",
        borderWidth: 2,
        height: props.status == "header" ? 50 : 40,
        width: "100%",
        borderTopWidth: props.status == "header" ? 2 : 0
      }}
    >
      <CustomCol
        data={props.status == "header" ? "INS NO" : props._in_no}
        info={"Number"}
        status={props.status}
        chk={props._status}
      />
      <CustomCol
        data={props.status == "header" ? "Date" : props._date}
        info={"date"}
        status={props.status}
        chk={props._status}
      />
      <CustomCol
        data={props.status == "header" ? "Amount" : props._amount}
        info={"amount"}
        status={props.status}
        chk={props._status}
      />
      <CustomCol
        data={props.status == "header" ? "Status" : props._status}
        info={"Status"}
        status={props.status}
        chk={props._status}
      />
    </Row>
  );
};

const Details = props => {
  return (
    <View style={{ marginBottom: 10, marginTop: 10, paddingBottom: 20 }}>
      <Row style={{ marginBottom: 10 }}>
        <Col>
          <CustomCheckBox info="pending" color="#FF8800" />
        </Col>
        <Col>
          <CustomCheckBox info="failed" color="red" />
        </Col>
        <Col>
          <CustomCheckBox info="paid" color="green" />
        </Col>
      </Row>

      <CusTomRow status={"header"} />
      {props.details.map(e => (
        <CusTomRow
          status={"con"}
          _in_no={e.installment_no}
          _date={e.payment_date}
          _amount={e.maounty_amount}
          _status={e.status}
          key={e.installment_no}
        />
      ))}
    </View>
  );
};

export default Details;
