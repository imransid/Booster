import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Footer, Grid, Row, Col } from "native-base";
import styles from "./Styles";

const customFooterLoan = props => {
  let data;
  props.cencel == true
    ? (data = require("../../../../assets/images/add_loan.png"))
    : (data = require("../../../../assets/images/cus_cancel.png"));

  const uri = data;

  return (
    // <Footer style={styles.footerCus}>
    <Grid>
      <Row>
        <Col style={{ width: "83%" }}></Col>
        <Col>
          <TouchableOpacity onPress={() => props.cus_func()}>
            <Image style={{ width: 60, height: 60 }} source={uri} />
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
    // {/* </Footer> */}
  );
};

export default customFooterLoan;
