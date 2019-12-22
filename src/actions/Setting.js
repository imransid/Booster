import actionType from "../constant/constant";

export function add_new_transection(data, nav, ctype, Card_Type) {
  return {
    type: actionType.ADD_TRANSECTION,
    result: data,
    nav: nav,
    category: ctype,
    Card_Type: Card_Type
  };
}

export function init_setting(email, name, pic, status) {
  return {
    type: actionType.INITIAL_SETTING,
    email: email,
    status: status,
    name: name,
    pic: pic
  };
}

export function Loged_init_setting(status) {
  return {
    type: actionType.INITIAL_SETTING,
    email: null,
    status: status,
    name: null,
    pic: null
  };
}

export function insertCloud() {
  return {
    type: actionType.SYNC
  };
}
