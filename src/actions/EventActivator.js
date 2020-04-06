import actionType from "../constant/constant";

//
export function load_all_mcm_details(session) {
  return {
    type: actionType.LOAD_MCM_DB,
    session: session
  };
}

// Load Borrow data

export function LoadBorrow(name) {
  return {
    type: actionType.LOAD_BORROWORLEND_DB,
    name: name
  };
}

// // Load EMI data

export function LoadEMI() {
  return {
    type: actionType.RETRIVE_EMI_DB
  };
}

// add EMI data

export function add_emi_db(title, amount, card_id, months, note, card_name) {
  return {
    type: actionType.ADD_EMI_DB,
    title: title,
    amount: amount,
    card_id: card_id,
    months: months,
    note: note,
    card_name: card_name
  };
}

// update EMI

export function updateEMI(emi_id) {
  return {
    type: actionType.UPDATE_EMI_DB,
    emi_id: emi_id
  };
}
