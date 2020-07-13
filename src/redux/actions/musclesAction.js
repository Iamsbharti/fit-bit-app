import { GET_MUSCLES } from "./actionTypes";
import { musclesApi } from "../../api/musclesApi";

export function getMuscles() {
  //console.log("action");
  //thunk for api calls and dispatch an action
  return async (dispatch) => {
    let muscles = await musclesApi();
    dispatch({ type: GET_MUSCLES, muscles });
  };
}
