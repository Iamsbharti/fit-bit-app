import {
  GET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE,
} from "../actions/actionTypes";
//import { exercises } from "../defaultStore";
export default function (_exercises = [], action) {
  //console.log("reducers", action.type, action.updatedExercise);
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises;
    case ADD_EXERCISE:
      return [..._exercises, action.exercise];
    case DELETE_EXERCISE:
      return _exercises.filter((ex) => ex.id !== action.id);
    case EDIT_EXERCISE:
      const { id, title, muscles, description } = action.updatedExercise;
      return _exercises.map((ex) =>
        ex.id === id
          ? {
              ...ex,
              id,
              title,
              muscles,
              description,
            }
          : ex
      );
    default:
      return _exercises;
  }
}
