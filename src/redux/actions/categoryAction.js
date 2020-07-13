import { SET_CATEGORY } from "./actionTypes";
export function setCategory(category) {
  //console.log("category-action");
  return (dispatch) => {
    dispatch({ type: SET_CATEGORY, category });
  };
}
