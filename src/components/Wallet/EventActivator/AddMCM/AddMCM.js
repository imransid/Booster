import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Picker
} from "react-native";
import {
  Container,
  Card,
  View,
  Input,
  Item,
  Label,
  Textarea,
  Button
} from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import moment from "moment";

let check = moment(new Date());

let Current_month = check.format("MMMM");

const CustomItem = props => {
  return (
    <View style={{ flex: 1 }}>
      <Item floatingLabel>
        <Label>{props.name}</Label>
        <Input keyboardType="numeric" onChangeText={e => props.setter(e)} />
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

  const [itemname, setItemname] = useState("");

  const [modalVisibilty, setModalVisibilty] = useState(false);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Using an IIFE
    (async function PickerDataCreater() {
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
        console.log("Error is PickerDataCreater ", error);
      }
    })();
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibilty}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
        >
          <View
            style={{ flex: 0.5, backgroundColor: "#D3D3D3", width: "100%" }}
          >
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1 }}>
              <Button success block onPress={() => setModalVisibilty(false)}>
                <Text style={{ color: "#FFF" }}>Add New Category</Text>
              </Button>
            </View>

            <View style={{ flex: 1 }}>
              <Button danger block onPress={() => setModalVisibilty(false)}>
                <Text style={{ color: "#FFF" }}>Cencel</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>

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
