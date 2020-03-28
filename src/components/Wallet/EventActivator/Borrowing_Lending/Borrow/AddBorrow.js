import React, { useState } from "react";
import { Text, Platform, StatusBar } from "react-native";
import { Container, Item, View, Input, Label, Button } from "native-base";
import HeaderMenu from "../../../ComponentHeader/HeaderMenu";
import DateTimePicker from "@react-native-community/datetimepicker";

import { _save_borrow } from "./Func_Methods";

const CustomItem = props => {
  return (
    <View style={{ flex: 1 }}>
      <Item floatingLabel>
        <Label>{props.name}</Label>
        <Input
          keyboardType={props.name == "Borrow Amount" ? "numeric" : "default"}
          onChangeText={e => props.setter(e)}
        />
      </Item>
    </View>
  );
};

const AddBorrow = props => {
  let title;
  const NameOf = props.navigation.state.params.names;
  NameOf == "ADD LEND LIST"
    ? (title = "Add Lend List")
    : (title = "Add Borrow List");

  const [itemname, setItemname] = useState("");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [itemdate, setItemDate] = useState(new Date());
  const [note, setNote] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || itemdate;
    setShow(Platform.OS === "ios");
    setItemDate(event.nativeEvent.timestamp);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={itemdate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Creditor Name" setter={e => setItemname(e)} />
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Borrow Amount" setter={e => setAmount(e)} />
        <View style={{ flex: 0.7 }}></View>
        <View style={{ flex: 1 }}>
          <Button
            info
            onPress={showDatepicker}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Return Date
            </Text>
          </Button>
        </View>
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Comments" setter={e => setNote(e)} />
        <View style={{ flex: 0.7 }}></View>
        <View style={{ flex: 1 }}>
          <Button
            success
            full
            onPress={() =>
              _save_borrow(props, itemname, amount, itemdate, note, NameOf)
            }
          >
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>
              Save
            </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default AddBorrow;
