import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import { Container, Item, View, Input, Label, Button } from "native-base";
import HeaderMenu from "../../../ComponentHeader/HeaderMenu";

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
  const title = "Add Borrow List";

  const [itemname, setItemname] = useState("");
  const [amount, setAmount] = useState("");
  const [itemdate, setItemDate] = useState("");
  const [note, setNote] = useState("");

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
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Creditor Name" setter={e => setItemname(e)} />
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Borrow Amount" setter={e => setAmount(e)} />
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Return Date" setter={e => setItemDate(e)} />
        <View style={{ flex: 0.7 }}></View>
        <CustomItem name="Comments" setter={e => setNote(e)} />
        <View style={{ flex: 0.7 }}></View>
        <View style={{ flex: 1 }}>
          <Button
            success
            full
            onPress={() =>
              _save_borrow(props, itemname, amount, itemdate, note)
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
