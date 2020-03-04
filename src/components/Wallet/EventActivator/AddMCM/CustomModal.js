import React, { useState, useEffect } from "react";
import { Modal, Text, AsyncStorage, Alert } from "react-native";
import { View, Input, Button } from "native-base";

_SaVe_Category = async (data, props) => {
  try {
    if (data == "") {
      Alert.alert("You can't Add Blank Catagory ");
    } else {
      const value = await AsyncStorage.getItem("PickerDataCategory");
      let data_load = JSON.parse(value);
      data_load.push(data);
      if (data_load) {
        await AsyncStorage.setItem(
          "PickerDataCategory",
          JSON.stringify(data_load)
        ).then(() => {
          props.SetVisibility();
          props.loadData();
        });
      }
    }
  } catch (error) {
    console.log("Error is _SaVe_Category ", error);
  }
};

const CustomModal = props => {
  const [dataIS, setDataIs] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visibitity}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "rgba(0,0,0, 0.7)"
        }}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: "#FFF",
            width: "100%",
            padding: 20
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Poppins-SemiBold",
                fontSize: 18,
                color: "#000"
              }}
            >
              ADD New Category
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Enter New Category"
              placeholderTextColor="#D3D3D3"
              style={{ borderColor: "#D3D3D3", borderWidth: 1 }}
              onChangeText={e => setDataIs(e)}
            />
          </View>

          <View style={{ flex: 0.5 }} />

          <View style={{ flex: 1 }}>
            <Button success block onPress={() => _SaVe_Category(dataIS, props)}>
              <Text style={{ color: "#FFF" }}>SAVE</Text>
            </Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button danger block onPress={() => props.SetVisibility()}>
              <Text style={{ color: "#FFF" }}>Cencel</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
