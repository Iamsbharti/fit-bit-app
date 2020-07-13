import { GET_MUSCLES } from "../actions/actionTypes";
import { muscles } from "../defaultStore";
export default function (_muscles = muscles, action) {
  //console.log("reducer", action.muscles);
  switch (action.type) {
    case GET_MUSCLES:
      return [..._muscles, action.muscles];
    default:
      return _muscles;
  }
}
