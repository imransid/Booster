import React, { Component, useState } from "react";
import { View, Grid, Row } from "native-base";
import HeaderMenu from "../../../../ComponentHeader/HeaderMenu";
import CustomCol from "../CustomCol/CustomCol";
import { useSelector } from "react-redux";

const CustomMenu = (props) => {
  const title = props.activeStatus;

  const total_borrow = useSelector((state) => state.EVENT_AC.total_borrow);
  const total_lend = useSelector((state) => state.EVENT_AC.total_lend);

  return (
    <View style={{ flex: 1, backgroundColor: props.color }}>
      <Grid>
        <Row>
          <HeaderMenu
            props={props.navigation}
            title={title}
            borrow={true}
            color={props.color}
          />
        </Row>
        <Row>
          <CustomCol
            name="LEND"
            total_amount={total_lend}
            color={props.color}
            _status={props.activeStatus.toUpperCase()}
            SETTER={() => props.SetValue("Lend")}
          />
          <CustomCol
            name="BORROW"
            total_amount={total_borrow}
            color={props.color}
            _status={props.activeStatus.toUpperCase()}
            SETTER={(e) => props.SetValue("Borrow")}
          />
        </Row>
      </Grid>
    </View>
  );
};

export default CustomMenu;
