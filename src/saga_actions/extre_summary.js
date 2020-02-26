import moment from "moment";

const _total_Balance_Gen = (wallet_id, wallet) => {
  let total_balance = 0;
  wallet.map(e => {
    if (e.wallet_id == wallet_id) {
      total_balance = total_balance + parseInt(e.avalible_balance);
    }
  });

  return total_balance;
};

const _total_Expense_Gen = (wallet_id, tran, val) => {
  let total_expence;
  if (val == "T_D") {
    let Current_Date = moment().format("DD-MM-YYYY");
    total_expence = _today_expence_gen(wallet_id, tran, Current_Date);
  } else if (val == "T_W") {
    let startOfWeek = moment()
      .startOf("week")
      .format("DD");
    let endOfWeek = moment()
      .endOf("week")
      .format("DD");
    total_expence = _weekly_expence_gen(
      wallet_id,
      tran,
      parseInt(startOfWeek),
      parseInt(endOfWeek)
    );
  } else if (val == "T_M") {
    let Current_Month = moment().format("MM");

    total_expence = _monthly_expence_gen(
      wallet_id,
      tran,
      parseInt(Current_Month)
    );
  } else if (val == "T_Y") {
    let Current_Year = moment().format("YYYY");

    total_expence = _yearly_expence_gen(
      wallet_id,
      tran,
      parseInt(Current_Year)
    );
  }

  return total_expence;
};

export const Value_Data_Gen = (wallet, tran, bank_code, wallet_id, val) => {
  try {
    let total_balance = _total_Balance_Gen(wallet_id, wallet);
    let total_expence = _total_Expense_Gen(wallet_id, tran, val);

    let data = {
      dateString: _dateString_Gen(val),
      expence: total_expence,
      balance: total_balance,
      cardId: bank_code
    };

    return data;
  } catch (error) {
    console.log("error val genarator function ", error);
  }
};

export const IniTial_App_Data = val => {
  let data = {
    dateString: _dateString_Gen(val),
    expence: 0,
    balance: 0,
    cardId: "INITIAL CARD"
  };

  return data;
};

const _dateString_Gen = val => {
  let dateString, Current_Week_Start_Day, Current_Week_End_Day;
  Current_Week_Start_Day = moment()
    .startOf("week")
    .format("DD-MM-YYYY");
  Current_Week_End_Day = moment()
    .endOf("week")
    .format("DD-MM-YYYY");

  val == "T_D"
    ? (dateString = moment().format("DD-MM-YYYY"))
    : val == "T_W"
    ? (dateString = Current_Week_Start_Day + " " + Current_Week_End_Day)
    : val == "T_M"
    ? (dateString = moment().format("MMMM"))
    : val == "T_Y"
    ? (dateString = moment().format("YYYY"))
    : null;

  return dateString;
};

// Today Expence Genarate
const _today_expence_gen = (wallet_id, tran, DaTe) => {
  try {
    let total_expence = 0;
    tran.length == 0
      ? (total_expence = 0)
      : tran.map(e => {
          e.walletId == wallet_id
            ? DaTe == e.date
              ? (total_expence = total_expence + parseInt(e.amount))
              : null
            : null;
        });

    return total_expence;
  } catch (error) {
    console.log("today expence error", error);
  }
};

// Weekly Expence Genarate
const _weekly_expence_gen = (wallet_id, tran, Srt_DaTe, EnD_DaTe) => {
  try {
    let total_expence = 0;
    tran.length == 0
      ? (total_expence = 0)
      : tran.map(e => {
          let dateChk = parseInt(e.date.slice(0, 2));
          e.walletId == wallet_id
            ? dateChk >= Srt_DaTe && dateChk <= EnD_DaTe
              ? (total_expence = total_expence + parseInt(e.amount))
              : null
            : null;
        });
    return total_expence;
  } catch (error) {
    console.log("weekly expence error", error);
  }
};

// Monthly Expence Genarate
const _monthly_expence_gen = (wallet_id, tran, c_month) => {
  try {
    let total_expence = 0;
    tran.length == 0
      ? (total_expence = 0)
      : tran.map(e => {
          let dateChk = parseInt(e.date.slice(3, 5));
          e.walletId == wallet_id
            ? c_month == dateChk
              ? (total_expence = total_expence + parseInt(e.amount))
              : null
            : null;
        });
    return total_expence;
  } catch (error) {
    console.log("month expence error", error);
  }
};

// Yearly Expence Genarate
const _yearly_expence_gen = (wallet_id, tran, c_year) => {
  try {
    let total_expence = 0;
    tran.length == 0
      ? (total_expence = 0)
      : tran.map(e => {
          let dateChk = parseInt(e.date.slice(6));

          e.walletId == wallet_id
            ? c_year == dateChk
              ? (total_expence = total_expence + parseInt(e.amount))
              : null
            : null;
        });
    return total_expence;
  } catch (error) {
    console.log("yearly expence error", error);
  }
};
