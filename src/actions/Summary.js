import actionType from "../constant/constant";

export function Summary_Retrive() {
  return {
    type: actionType.SUMMARY,
    chker: "init"
  };
}

export function Summary_Today(wallet_id, bank_code) {
  return {
    type: actionType.SUMMARY_TODAY,
    chker: "changer",
    wallet_id: wallet_id,
    bank_code: bank_code
  };
}

export function Summary_Week(wallet_id, bank_code) {
  return {
    type: actionType.SUMMARY_WEEK,
    chker: "changer",
    wallet_id: wallet_id,
    bank_code: bank_code
  };
}

export function Summary_Month(wallet_id, bank_code) {
  return {
    type: actionType.SUMMARY_MONTH,
    chker: "changer",
    wallet_id: wallet_id,
    bank_code: bank_code
  };
}

export function Summary_Year(wallet_id, bank_code) {
  return {
    type: actionType.SUMMARY_YEAR,
    chker: "changer",
    wallet_id: wallet_id,
    bank_code: bank_code
  };
}
