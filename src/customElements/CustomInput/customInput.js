import React from "react";
import { Input } from "native-base";
import styles from "../../components/Wallet/EventActivator/Loan/Styles";

const CustomInput = props => {
  return (
    <Input
      style={styles.input_Item_Cus}
      placeholderTextColor={"#A9A9A6"}
      placeholder={props.placeholder}
      onChangeText={e => props.value(e)}
      keyboardType={props.kEy}
    />
  );
};

export default CustomInput;
