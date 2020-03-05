import actionType from "../constant/constant";

//
export function load_all_mcm_details(session) {
  return {
    type: actionType.ADD_WALLET_CARD,
    session: session
  };
}
