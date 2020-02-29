import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import {
  Container,
  Card,
  View,
  Input,
  Item,
  Label,
  Picker,
  Textarea,
  Button
} from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import moment from "moment";

let check = moment(new Date());

let Current_month = check.format("MMMM");

const CusTomText = props => {
  return (
    <Text
      style={{
        fontFamily: "Audrey-Bold",
        color: props.name == "Add Expence" ? "#000" : "#FFF",
        textAlign: "center",
        fontSize: 18
      }}
    >
      {props.name}
    </Text>
  );
};

const CustomCard = props => {
  return (
    <Card
      style={{
        backgroundColor: props.name == "Add Expence" ? "#FFA000" : "#0091EA",
        padding: 10
      }}
    >
      <TouchableOpacity onPress={() => alert("okkk")}>
        <CusTomText name={props.name} />
      </TouchableOpacity>
    </Card>
  );
};

const AddMCM = props => {
  const title = "Add Today Expence";

  const [PickerData, setPickerData] = useState(["bbok", "data", "new"]);

  useEffect(() => {
    console.log("okokko");
    // setPickerData(["bbok", "data", "new"]);
  }, [PickerData]);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />
      <View style={{ flex: 1, padding: 10 }}>
        {/* Item name */}
        <View style={{ flex: 1 }}>
          <Item floatingLabel>
            <Label>Item Name</Label>
            <Input />
          </Item>
        </View>

        {/* Price */}

        <View style={{ flex: 1 }}>
          <Item floatingLabel>
            <Label>Price</Label>
            <Input />
          </Item>
        </View>

        {/* Category */}

        <View style={{ flex: 1 }}>
          <Picker
            mode="dropdown"
            placeholder="Select your SIM"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            style={{ width: undefined }}
            selectedValue={"book"}
            onValueChange={e => console.log(e)}
          >
            {PickerData.map(e => (
              <Picker.Item
                key={Math.floor(Math.random() * 10)}
                label={e}
                value={e}
              />
            ))}
          </Picker>
        </View>

        {/* Add Remark Or Comments */}

        <View style={{ flex: 2 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Add Remarks Or Comments"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Button block success>
            <Text style={{ color: "#FFF" }}>SAVE</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default AddMCM;
