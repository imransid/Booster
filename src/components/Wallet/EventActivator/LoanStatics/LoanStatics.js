import React, { useState, useEffect } from "react";
import { ScrollView, Text, ActivityIndicator, StatusBar } from "react-native";
import {
  Container,
  Card,
  View,
  Grid,
  Row,
  Col,
  Footer,
  Button
} from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Styles";
import { _load_Statistics_loader } from "../../../../actions/EventActivator";
import Pie from "react-native-pie";
import CustomRow from "../../../../customElements/CustomRow/CustomRow";
import CustomCheckBox from "../../../../customElements/CustomCheckBox/CustomCheckBox";
import Details from "./Details";
import moment from "moment";
import { _load_update } from "../../../../actions/EventActivator";

let check = moment(new Date());
let current_month = check.format("MM");
let current_MOnth = check.format("M");
let current_year = check.format("YYYY");

const _CustomRow = props => {
  return (
    <Row>
      <Text style={{ textAlign: props._positions, width: "100%" }}>
        {props.info}
      </Text>
    </Row>
  );
};

const _CustomCol = props => {
  return (
    <Col>
      <_CustomRow info={props.infoA} _positions={props.position} />
      <_CustomRow info={props.infoB} _positions={props.position} />
    </Col>
  );
};

const CusTomCol = props => {
  return (
    <Row>
      <_CustomCol infoA={props._infoA} infoB={props._infoB} position="left" />
      <_CustomCol infoA={props._infoC} infoB={props._infoD} position="right" />
    </Row>
  );
};

const Statistics = props => {
  const ID = props.navigation.state.params.id;
  const dispatch = useDispatch();
  const loader = useSelector(state => state.EVENT_AC.loan_Statistics_loader);
  const loan_Statistics_data = useSelector(
    state => state.EVENT_AC.loan_Statistics_data
  );
  const loan_Statistics_details = useSelector(
    state => state.EVENT_AC.loan_Statistics_details
  );
  const title = "Loan Statistics";
  const [onDetails, setOnDetails] = useState(false);
  const [totalInstallment, setTotalInstallment] = useState(0);
  const [showDate, setShowDate] = useState(0);
  const [showPaid, setShowPaid] = useState(0);
  const [showPending, setShowPending] = useState(0);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    try {
      if (ID == loan_Statistics_data.id) {
        let Time = loan_Statistics_data.selectYear.slice(0, -5);
        let month = parseInt(Time) * 12;
        setTotalInstallment(month);

        let simple_fixed_date = parseInt(
          loan_Statistics_data.itemdate.slice(0, -8)
        );

        let _date =
          simple_fixed_date + "/" + current_month + "/" + current_year;

        let _date2 =
          simple_fixed_date + "/" + current_MOnth + "/" + current_year;

        setShowDate(_date);

        // get paid percentage

        let average = (loan_Statistics_data.paidInstallment * 100) / month;

        setShowPaid(average);
        setShowPending(100 - average);

        // set Button toggol

        loan_Statistics_details[loan_Statistics_data.paidInstallment]
          .payment_date == _date2
          ? setShowButton(false)
          : setShowButton(true);
      }
      (ID !== loan_Statistics_data.id) == true
        ? dispatch(_load_Statistics_loader(ID))
        : null;
    } catch (error) {
      console.log("Error is LoanStatics useEffect ", error);
    }
  }, [loader]);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      {loader == true ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView
          style={{
            padding: 15,
            marginBottom: 20
          }}
        >
          <Card
            style={{
              padding: 5
            }}
          >
            <CusTomCol
              _infoA={loan_Statistics_data.loanTitle}
              _infoB={loan_Statistics_data.loan_catgory}
              _infoC={loan_Statistics_data.amount}
              _infoD={loan_Statistics_data.selectYear}
            />
          </Card>
          <View style={{ padding: 10 }}>
            <Row>
              <Col>
                <Text>Statistics : </Text>
              </Col>
              <Col>
                <CustomCheckBox info="due" color="#FF8800" />
              </Col>
              <Col>
                <CustomCheckBox info="paid" color="green" />
              </Col>
            </Row>
          </View>
          <View
            style={{
              padding: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Pie
              radius={85}
              series={[showPending, showPaid]}
              colors={["#FF8800", "green"]}
            />
          </View>
          <View>
            <CustomRow
              name="Total Amount "
              amount={loan_Statistics_data.amount}
              info="text"
            />
            <CustomRow
              name="Installment Amount "
              amount={loan_Statistics_data.monthly_amount}
              info="text"
            />
            <CustomRow
              name="Number Of Installment "
              amount={totalInstallment}
              info="text"
            />
            <CustomRow
              name="Installment Left "
              amount={
                totalInstallment -
                parseInt(loan_Statistics_data.paidInstallment)
              }
              info="text"
            />
            <CustomRow
              name="Duration Time "
              amount={loan_Statistics_data.selectYear}
              info="text"
            />
            <CustomRow name="Payment Date " amount={showDate} info="text" />
            <CustomRow
              name="All Details "
              amount="000"
              info="button"
              iconName={onDetails == true ? "up" : "down"}
              setDetails={() => setOnDetails(!onDetails)}
            />
            {onDetails == true ? (
              <Details details={loan_Statistics_details} />
            ) : null}
          </View>
        </ScrollView>
      )}
      <Footer style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            padding: 5
          }}
        >
          <Button
            block
            success
            disabled={showButton}
            onPress={() => dispatch(_load_update(ID))}
          >
            <Text style={{ color: "#FFF" }}>Pay Installment</Text>
          </Button>
        </View>
      </Footer>
    </Container>
  );
};

export default Statistics;
