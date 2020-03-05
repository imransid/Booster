import React, { useState, useEffect } from "react";
import { Text, StatusBar, AsyncStorage, Picker } from "react-native";
import {
  Container,
  View,
  Input,
  Item,
  Label,
  Textarea,
  Button
} from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import CustomModal from "./CustomModal";
import _cusMethods from "./extraMethod";

const CustomItem = props => {
  return (
    <View style={{ flex: 1 }}>
      <Item floatingLabel>
        <Label>{props.name}</Label>
        <Input
          keyboardType={props.name == "Item Name" ? "default" : "numeric"}
          onChangeText={e => props.setter(e)}
        />
      </Item>
    </View>
  );
};

const AddMCM = props => {
  const title = "Add Today Expence";

  const [PickerData, setPickerData] = useState([
    "Select Category",
    "Shop",
    "Eat",
    "Food"
  ]);

  const [notes, setNotes] = useState("");

  const [itemname, setItemname] = useState("");

  const [modalVisibilty, setModalVisibilty] = useState(false);

  const [price, setPrice] = useState(0);

  const [selectCatagory, setselectCatagory] = useState("Select Category");

  useEffect(() => {
    // Using an IIFE
    (async function PickerDataCreater() {
      try {
        // Load picker Save all value From DB
        await _picker_Data_Load();
      } catch (error) {
        console.log("Error is PickerDataCreater ", error);
      }
    })();
  }, []);

  _picker_Data_Load = async () => {
    try {
      // Load picker Save all value From DB
      const value = await AsyncStorage.getItem("PickerDataCategory");

      if (value == null) {
        await AsyncStorage.setItem(
          "PickerDataCategory",
          JSON.stringify(PickerData)
        );
      } else {
        let data_load = JSON.parse(value);

        setPickerData(data_load);
      }
    } catch (error) {
      console.log("Error is _picker_Data_Load ", error);
    }
  };

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      {/* For Modal */}

      <CustomModal
        visibitity={modalVisibilty}
        SetVisibility={() => setModalVisibilty(false)}
        loadData={() => _picker_Data_Load()}
      />

      <View style={{ flex: 1, padding: 10 }}>
        {/* Item name */}

        <CustomItem name="Item Name" setter={e => setItemname(e)} />

        {/* Price */}

        <CustomItem name="price" setter={e => setPrice(e)} />

        {/* Category */}

        <View style={{ flex: 1.8 }}>
          <Picker
            mode="dropdown"
            placeholder="Select your SIM"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            style={{ width: undefined }}
            selectedValue={selectCatagory}
            onValueChange={e => setselectCatagory(e)}
          >
            {PickerData.map(e => (
              <Picker.Item
                key={Math.floor(Math.random() * 10)}
                label={e}
                value={e}
              />
            ))}
          </Picker>
          <Button block primary onPress={() => setModalVisibilty(true)}>
            <Text style={{ color: "#FFF" }}>Add More Category</Text>
          </Button>
        </View>

        {/* Fake */}

        <View style={{ flex: 0.5 }}></View>

        {/* Add Remark Or Comments */}

        <View style={{ flex: 2 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Add Remarks Or Comments"
            onChangeText={e => setNotes(e)}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Button
            block
            success
            onPress={() =>
              _cusMethods(props, selectCatagory, itemname, price, notes)
            }
          >
            <Text style={{ color: "#FFF" }}>SAVE</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default AddMCM;
