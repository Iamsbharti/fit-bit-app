import exercisesReducer from "./exercisesReducer";
import musclesReducers from "./musclesReducers";
import categoryReducers from "./categoryReducers";
import { combineReducers } from "redux";

export default combineReducers({
  exercises: exercisesReducer,
  muscles: musclesReducers,
  category: categoryReducers,
});
