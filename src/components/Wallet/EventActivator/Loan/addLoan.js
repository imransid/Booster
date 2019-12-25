import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Content, Label, Item, Input, Card } from "native-base";
import ICONS from "react-native-vector-icons/Entypo";
// ScrollView style={styles.bank_scroll}
import styles from "./Styles";

const addLoan = props => {
  return (
    <Content>
      <ScrollView style={{ padding: 20 }}>
        <Card style={{ padding: 10 }}>
          <Item style={styles.input_Item}>
            <Label style={{ fontSize: 18, fontWeight: "bold" }}>
              Proceed To Loan
            </Label>
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="Enter Loan Title"
              onFocus={props.text_on_focus}
              onBlur={props.text_on_blur}
            />
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="okk"
            />
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="okk"
            />
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="okk"
            />
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="okk"
            />
          </Item>
          <Item style={styles.input_Item}>
            <Input
              style={styles.input_Item_Cus}
              placeholderTextColor={"#A9A9A6"}
              placeholder="okk"
            />
          </Item>
        </Card>
      </ScrollView>
    </Content>
  );
};

export default addLoan;
