import React from "react";
import { Text } from "react-native";
import { View, Grid, Row, Button } from "native-base";
import { useDispatch } from "react-redux";
import { CusTomBox, CusTomGrid } from "./CustomComponents";
import { updateEMI } from "../../../../actions/EventActivator";

const CustomModal = props => {
  const dispatch = useDispatch();
  const total_bill = parseInt(props.info.amount);

  const installment_no =
    props.info.total_month == props.info.payable_month
      ? 1
      : props.info.payable_month == 1
      ? props.info.total_month
      : props.info.total_month - props.info.payable_month;

  _onSubmit = () => {
    props.closeModal();
    dispatch(updateEMI(props.info.emi_id));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 10 }}>
      <View style={{ flex: 1 }}>
        <Grid>
          <CusTomGrid mode={"header"} info={"Installment"} />
          <CusTomGrid mode={"icon"} close={() => props.closeModal()} />
        </Grid>
      </View>
      <View style={{ flex: 1 }}>
        <Grid>
          <CusTomGrid
            mode={"regular"}
            position={"left"}
            info={"Installment NO : "}
          />
          <CusTomGrid
            mode={"regular"}
            position={"right"}
            info={installment_no}
          />
        </Grid>
      </View>
      <View style={{ flex: 1 }}>
        <Grid>
          <CusTomGrid
            mode={"regular"}
            position={"left"}
            info={"Remaining Installment : "}
          />
          <CusTomGrid
            mode={"regular"}
            position={"right"}
            info={props.info.total_month - installment_no}
          />
        </Grid>
      </View>
      <View style={{ flex: 1 }}>
        <Grid>
          <CusTomGrid
            mode={"regular"}
            position={"left"}
            info={"Date Of Submission : "}
          />
          <CusTomGrid mode={"regular"} position={"right"} info={"01/05/2020"} />
        </Grid>
      </View>

      <View style={{ flex: 5 }}>
        <Row style={{ height: "65%" }}>
          <CusTomBox
            position={"left"}
            info={"Total amount required"}
            amount={total_bill}
          />
          <CusTomBox
            position={"right"}
            info={"Monthly installment"}
            amount={props.info.monthly_bill.toFixed(2)}
          />
        </Row>
        <Row></Row>
      </View>
      <View style={{ flex: 1 }}>
        <Button full primary onPress={() => _onSubmit()}>
          <Text style={{ fontFamily: "Audrey-Bold", color: "#fff" }}>
            SUBMIT
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default CustomModal;
