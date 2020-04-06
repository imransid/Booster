import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { View, Card, Input, Picker } from "native-base";
import styles from "./Styles";
import { retrieveWalletCard } from "../../../../saga_actions/All_Data_Wallet";
import { ADD_EMI_DB } from "./CustomFunc";

const CustomInput = props => {
  return (
    <Input
      style={{ borderColor: "#D3D3D3", borderWidth: 1 }}
      placeholderTextColor={"#A9A9A6"}
      placeholder={props.placeHolder}
      onChangeText={e => props.SetterText(e)}
      keyboardType={props.placeHolder !== "Amount" ? "default" : "numeric"}
    />
  );
};

const CustomPIcker = props => {
  return (
    <Picker
      mode="dropdown"
      style={{ height: "90%" }}
      selectedValue={props.valueIS}
      onValueChange={itemValue => props.setterValue(itemValue)}
    >
      {props.Raw_Values.filter((value, index) =>
        props.valueIS === 0 ? value : index === 0 ? false : value
      ).map((value, index) => (
        <Picker.Item label={value} value={value} key={index} />
      ))}
    </Picker>
  );
};

const _CustomAlert = props => {
  return Alert.alert("! No Card Found", "Please Add Card in Your Wallet.", [
    { text: "OK", onPress: () => props.cus_func() }
  ]);
};

const AddEMI = props => {
  const dispatch = useDispatch();
  const [loader, setloader] = useState(true);
  const [walletCardList, SetwalletCardList] = useState(true);
  let values = ["Select CARD"];

  const All_Card = useSelector(state => state.TRASECTION.all_walllet_card);

  // Vslues set for BAnk
  if (All_Card.length == undefined) {
    All_Card.bank_code == "Initial Card"
      ? _CustomAlert(props)
      : values.push(
          All_Card.bank_code + "  **** **** " + "**** " + All_Card.card_num
        );
  } else {
    All_Card.map(e =>
      values.push(e.bank_code + "  **** **** " + "**** " + e.card_num)
    );
  }

  useEffect(() => {
    // Using an IIFE
    (async function DataCreater() {
      try {
        // Fake loading Crator
        const Data = await retrieveWalletCard();
        SetwalletCardList(Data);
        Data.length == undefined ? setloader(false) : setloader(false);
      } catch (error) {
        console.log("Error is AddEMI useEffect ", error);
      }
    })();
  }, [loader]);

  const months = [
    "Select Month",
    "06 Month",
    "12 Month",
    "36 Month",
    "48 Month",
    "60 Month"
  ];

  const [card_name, setCardName] = useState(0);
  const [selectMonth, setMonth] = useState(0);

  const [title, SetTittle] = useState("");
  const [amount, SetAmount] = useState("");
  const [note, SetNote] = useState("");

  return loader == true ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.Custom_Contain}>
      <Card style={{ flex: 1, padding: 10 }}>
        <View style={styles.flex_0_7}>
          <Text style={styles.FontText}>Proceed an EMI</Text>
        </View>
        <View style={styles.flex_1}>
          <CustomInput
            placeHolder={"Add EMI Title"}
            SetterText={e => SetTittle(e)}
          />
        </View>
        <View style={styles.flex_1}>
          <CustomInput placeHolder={"Amount"} SetterText={e => SetAmount(e)} />
        </View>
        <View style={styles.flex_1}>
          <View style={{ borderWidth: 1, borderColor: "#D3D3D3" }}>
            <CustomPIcker
              Raw_Values={values}
              valueIS={card_name}
              setterValue={e => setCardName(e)}
            />
          </View>
        </View>
        <View style={styles.flex_1}>
          <View style={{ borderWidth: 1, borderColor: "#D3D3D3" }}>
            <CustomPIcker
              Raw_Values={months}
              valueIS={selectMonth}
              setterValue={e => setMonth(e)}
            />
          </View>
        </View>
        <View style={styles.flex_1}>
          <CustomInput placeHolder={"Comments"} SetterText={e => SetNote(e)} />
        </View>
        <View style={styles.Custom_Buttom_View}>
          <TouchableOpacity
            onPress={() =>
              ADD_EMI_DB(
                title,
                amount,
                note,
                card_name,
                selectMonth,
                props,
                walletCardList,
                dispatch
              )
            }
            style={styles.Custom_Buttom}
          >
            <Text style={styles.Button_text}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default AddEMI;
