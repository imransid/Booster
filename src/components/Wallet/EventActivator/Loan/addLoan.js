import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Slider, Text } from "react-native";
import {
  Content,
  Label,
  Item,
  Input,
  Card,
  Picker,
  Grid,
  Col,
  Row,
  Textarea
} from "native-base";
import ICONS from "react-native-vector-icons/Entypo";
import CUSFOOTER from "./customFooterLoan";
import styles from "./Styles";

const addLoan = props => {
  const values = [
    "Select Loan Catagory",
    "Home Loan",
    "Bike Loan",
    "Personal Loan",
    "Car Loan"
  ];

  const months = [
    "Select Month",
    "06 Month",
    "12 Month",
    "36 Month",
    "60 Month"
  ];

  const banks = ["Select Bank", "BRAC Bank", "City Bank", "EBL", "NRB"];
  const [count, setCount] = useState(0);
  const [selectMonth, setMonth] = useState(0);
  const [loan_catgory, setLoanCatgory] = useState(0);
  const [selectBank, setBank] = useState(0);

  return (
    <Content>
      <ScrollView style={{ padding: 20 }}>
        <Grid>
          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Label style={styles.input_header}>Proceed To Loan</Label>
              </Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Input
                  style={styles.input_Item_Cus}
                  placeholderTextColor={"#A9A9A6"}
                  placeholder="Enter Loan Title"
                  onFocus={props.text_on_focus}
                  onBlur={props.text_on_blur}
                />
              </Item>
            </Col>
          </Row>

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
          <Row>
            <Col>
              <Item style={styles.input_Item}>
                <Input
                  style={styles.input_Item_Cus}
                  placeholderTextColor={"#A9A9A6"}
                  placeholder="Amount"
                  onFocus={props.text_on_focus}
                  onBlur={props.text_on_blur}
                />
              </Item>
            </Col>
          </Row>
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
                      ? setCount(e.toString().substring(2, 4))
                      : null
                  }
                />
              </Row>
            </Col>
          </Row>
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
                  onValueChange={itemValue => setMonth(itemValue)}
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
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <CUSFOOTER cus_func={() => props.customCencel()} cencel={false} />
          </Row>
        </Grid>
      </ScrollView>
    </Content>
  );
};

export default addLoan;
