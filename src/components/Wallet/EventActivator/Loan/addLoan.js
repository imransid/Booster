import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Slider,
  Text,
  Platform
} from "react-native";
import {
  Content,
  Label,
  Item,
  Picker,
  Grid,
  Col,
  Row,
  Textarea,
  Button
} from "native-base";
import { useDispatch } from "react-redux";
import ICONS from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import CUS_INPUT from "../../../../customElements/CustomInput/customInput";
import moment from "moment";

import DateTimePicker from "@react-native-community/datetimepicker";
import { check_Sumbit, _interest_calculation } from "./customMethods";

const CusRow = props => {
  return (
    <Row>
      <Col>
        <Item style={styles.input_Item}>
          <CUS_INPUT
            placeholder={props.name}
            value={e => props.SetterValue(e)}
            kEy={props.Key}
          />
        </Item>
      </Col>
    </Row>
  );
};

const addLoan = props => {
  const values = [
    "Select Loan Catagory",
    "Home Loan",
    "Bike Loan",
    "Personal Loan",
    "Car Loan"
  ];

  const months = [
    "Select Years",
    "1 Years",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years",
    "8 Years"
  ];
  const dispatch = useDispatch();

  const [loanTitle, setLoanTitle] = useState("");
  const [paidInstallment, setPaidInstallment] = useState(0);
  const banks = ["Select Bank", "BRAC Bank", "City Bank", "EBL", "NRB"];
  const [count, setCount] = useState(0);
  const [selectMonth, setMonth] = useState(0);
  const [loan_catgory, setLoanCatgory] = useState(0);
  const [selectBank, setBank] = useState(0);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [itemdate, setItemDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || itemdate;
    setShow(Platform.OS === "ios");

    const check_in = moment(event.nativeEvent.timestamp);
    const ent_Date = check_in.format("DD-MM-YYYY");

    setItemDate(ent_Date);
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const _seTamountCheckr = e => {
    setAmount(e);
    _checkMonthlYAmount("amount", e);
  };

  const _seTInterestCheckr = e => {
    setCount(e);
    _checkMonthlYAmount("interest", e);
  };

  const _seTdUrationsCheckr = e => {
    setMonth(e);
    _checkMonthlYAmount("time", e);
    // let time = e.slice(0, -5);
  };

  const _checkMonthlYAmount = (name, val) => {
    let monthlyInstallment = monthlyAmount;
    let totalAmount = name == "amount" ? val : amount;
    let totalduration = name == "time" ? val : selectMonth;
    let totalInterest = name == "interest" ? val : count;

    monthlyInstallment == 0 &&
    totalAmount !== 0 &&
    totalduration !== 0 &&
    totalInterest !== 0
      ? setMonthlyAmount(
          _interest_calculation(totalAmount, totalduration, totalInterest)
        )
      : null;
  };

  return (
    <Content>
      <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps="never">
        <Grid>
          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Label style={styles.input_header}>Proceed To Loan</Label>
              </Item>
            </Col>
          </Row>

          <CusRow
            name="Enter Loan Title"
            SetterValue={e => setLoanTitle(e)}
            Key="default"
          />

          {/* Set Payment Date */}

          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Button
                  block
                  style={{ width: "100%" }}
                  onPress={() => showDatepicker()}
                >
                  <Text style={{ color: "#FFF" }}>
                    {itemdate == "" ? "Set Billing Date" : itemdate}
                  </Text>
                </Button>
              </Item>
            </Col>
          </Row>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={new Date()}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          {/* Paid installment */}

          <CusRow
            name="Paid Installment"
            SetterValue={e => setPaidInstallment(e)}
            Key="numeric"
          />

          <Row
            style={{
              borderColor: "#D3D3D3",
              borderWidth: 1,
              borderBottomColor: "#FFFFFF",
              marginBottom: 10
            }}
          >
            <Col>
              <Item picker>
                <Picker
                  mode="dropdown"
                  style={
                    loan_catgory == 0
                      ? styles.cus_placeColorA
                      : styles.cus_placeColorB
                  }
                  iosIcon={<ICONS name="arrow-down" />}
                  selectedValue={loan_catgory}
                  onValueChange={itemValue => setLoanCatgory(itemValue)}
                >
                  {values
                    .filter((value, index) =>
                      loan_catgory === 0 ? value : index === 0 ? false : value
                    )
                    .map((value, index) => (
                      <Picker.Item label={value} value={value} key={index} />
                    ))}
                </Picker>
              </Item>
            </Col>
          </Row>
          {/* Amount */}

          <CusRow
            name="Amount"
            SetterValue={e => _seTamountCheckr(e)}
            Key="numeric"
          />
          {/* INterest Rate */}
          <Row
            style={{
              borderColor: "#D3D3D3",
              borderWidth: 1,
              marginBottom: 10
            }}
          >
            <Col>
              <Row style={{ padding: 3 }}>
                <Label style={{ paddingLeft: 5 }}>
                  Interest Rate :{" "}
                  <Text style={count == 0 ? styles.colorA : styles.colorB}>
                    {" "}
                    {count} %
                  </Text>
                </Label>
              </Row>

              <Row>
                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#4527A0"
                  maximumTrackTintColor="#E3F2FD"
                  onValueChange={e =>
                    e !== 1 || e == 0
                      ? _seTInterestCheckr(e.toString().substring(2, 4))
                      : null
                  }
                />
              </Row>
            </Col>
          </Row>

          {/* Monthly Installment */}

          <CusRow
            name={
              monthlyAmount == 0
                ? "Monthly Installment"
                : monthlyAmount.toString()
            }
            SetterValue={e => setMonthlyAmount(e)}
            Key="numeric"
          />
          {/* Select Month */}
          <Row
            style={{
              borderColor: "#D3D3D3",
              borderWidth: 1,
              borderBottomColor: "#FFFFFF",
              marginBottom: 10
            }}
          >
            <Col>
              <Item picker>
                <Picker
                  mode="dropdown"
                  style={
                    selectMonth == 0
                      ? styles.cus_placeColorA
                      : styles.cus_placeColorB
                  }
                  iosIcon={<ICONS name="arrow-down" />}
                  selectedValue={selectMonth}
                  onValueChange={itemValue => _seTdUrationsCheckr(itemValue)}
                >
                  {months
                    .filter((value, index) =>
                      selectMonth === 0 ? value : index === 0 ? false : value
                    )
                    .map((value, index) => (
                      <Picker.Item label={value} value={value} key={index} />
                    ))}
                </Picker>
              </Item>
            </Col>
          </Row>
          {/* Select Bank */}
          <Row
            style={{
              borderColor: "#D3D3D3",
              borderWidth: 1,
              borderBottomColor: "#FFFFFF",
              marginBottom: 10
            }}
          >
            <Col>
              <Item picker>
                <Picker
                  mode="dropdown"
                  style={
                    selectBank == 0
                      ? styles.cus_placeColorA
                      : styles.cus_placeColorB
                  }
                  iosIcon={<ICONS name="arrow-down" />}
                  selectedValue={selectBank}
                  onValueChange={itemValue => setBank(itemValue)}
                >
                  {banks
                    .filter((value, index) =>
                      selectBank === 0 ? value : index === 0 ? false : value
                    )
                    .map((value, index) => (
                      <Picker.Item label={value} value={value} key={index} />
                    ))}
                </Picker>
              </Item>
            </Col>
          </Row>
          {/* Description */}
          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Textarea
                  style={styles.input_Item_Cus_txtArea}
                  rowSpan={5}
                  bordered
                  placeholder="Description"
                  placeholderTextColor="#a9a9a9"
                  onChangeText={e => setDescription(e)}
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() =>
                  check_Sumbit(
                    props.cus_func(),
                    dispatch,
                    loanTitle,
                    paidInstallment,
                    selectMonth,
                    loan_catgory,
                    selectBank,
                    itemdate,
                    amount,
                    description,
                    count,
                    monthlyAmount
                  )
                }
                style={styles.proced_Button}
              >
                <Text style={styles.proced_Text}>Proceed </Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    </Content>
  );
};

export default addLoan;
