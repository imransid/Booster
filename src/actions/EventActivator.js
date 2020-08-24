import actionType from "../constant/constant";

//
export function load_all_mcm_details(session) {
  return {
    type: actionType.LOAD_MCM_DB,
    session: session,
  };
}

// Load Borrow data

export function LoadBorrowOrLend(name) {
  return {
    type: actionType.LOAD_BORROWORLEND_DB,
    name: name,
  };
}

// Save Borrow data

export function saveBorrowOrLend(info, nav, name) {
  return {
    type: actionType.SAVE_BORROWORLEND_DB,
    name: name,
    nav: nav,
    info: info,
  };
}

// // Load EMI data

export function LoadEMI() {
  return {
    type: actionType.RETRIVE_EMI_DB,
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
    card_name: card_name,
  };
}

// update EMI

export function updateEMI(emi_id) {
  return {
    type: actionType.UPDATE_EMI_DB,
    emi_id: emi_id,
  };
}

// LOan Data

export function LoadLoan() {
  return {
    type: actionType.RETRIVE_LOAN,
  };
}

// LOan Data

export function addLoan(
  loanTitle,
  paidInstallment,
  selectYear,
  loan_catgory,
  selectBank,
  itemdate,
  amount,
  description,
  interest,
  monthly_amount
) {
  return {
    type: actionType.ADD_LOAN,
    loanTitle: loanTitle,
    paidInstallment: paidInstallment,
    selectYear: selectYear,
    loan_catgory: loan_catgory,
    selectBank: selectBank,
    itemdate: itemdate,
    amount: amount,
    description: description,
    interest: interest,
    monthly_amount: monthly_amount,
  };
}

export function _load_Statistics_loader(id) {
  return {
    type: actionType.STATISTICS,
    id: id,
  };
}

export function _load_update(id) {
  return {
    type: actionType.LOANUPDATE,
    id: id,
  };
}

export function refreshBorrowOrLend(name) {
  return {
    type: actionType.REFRESHBORROWORLEND,
    name: name,
  };
}
