import { Alert } from "react-native";
import { add_emi_db } from "../../../../actions/EventActivator";

export const ADD_EMI_DB = (
  title,
  amount,
  note,
  card_name,
  selectMonth,
  props,
  walletCard,
  dispatch
) => {
  console.log(title, amount, note, card_name, selectMonth);
  if (
    title == "" ||
    amount == "" ||
    note == "" ||
    card_name == 0 ||
    selectMonth == 0
  ) {
    // check any input is empty or not
    Alert.alert("! Blank Field", "Please Check Input Field and Try Again.");
  } else {
    //   All Feild avaliable

    let CardNum = card_name.substr(-4);

    const BalanceStatus = ChkAvaBalance(walletCard, CardNum, amount);

    if (BalanceStatus == true) {
      dispatch(
        add_emi_db(title, amount, CardNum, selectMonth, note, card_name)
      );
      props.cus_func();
    } else {
      Alert.alert("! Amount", "Please Check Amount and Try Again.");
    }
  }
};

// Check Balance

const ChkAvaBalance = (allCard, cardNum, amount) => {
  let Balance, return_data;

  if (allCard.length == undefined) {
    Balance = parseInt(allCard.avalible_balance);
  } else {
    allCard.map(e =>
      e.card_num == cardNum ? (Balance = parseInt(e.avalible_balance)) : null
    );
  }

  amount < Balance ? (return_data = true) : (return_data = false);

  return return_data;
};
