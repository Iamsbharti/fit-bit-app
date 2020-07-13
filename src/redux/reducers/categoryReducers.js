import { SET_CATEGORY } from "../actions/actionTypes";

export default function categoryReducers(category = "", action) {
  //console.log("category reducers");
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return category;
  }
}
