import actionType from "../constant/constant";

//
export function load_all_mcm_details(session) {
  return {
    type: actionType.LOAD_MCM_DB,
    session: session
  };
}
