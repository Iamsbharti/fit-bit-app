import {
  GET_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE,
} from "./actionTypes";
import * as exercisesApi from "../../api/exercisesApi";

export function getExercises() {
  // console.log("exer-action");
  return async (dispatch) => {
    let exercises = await exercisesApi.fetchExercises();
    dispatch({ type: GET_EXERCISES, exercises });
  };
}

export function createExercise(newExercise) {
  //console.log("create-action", newExercise);
  return async (dispatch) => {
    let exercise = await exercisesApi.createExcercise(newExercise);
    dispatch({ type: ADD_EXERCISE, exercise });
  };
}

export function deleteExercise(exerciseId) {
  //console.log("delete action", exerciseId);
  return async (dispatch) => {
    let id = await exercisesApi.deleteExercise(exerciseId);
    dispatch({ type: DELETE_EXERCISE, id });
  };
}
export function editExercise(editedExercise) {
  //console.log("edit action", editedExercise);
  return async (dispatch) => {
    let updatedExercise = await exercisesApi.editExercise(editedExercise);
    dispatch({ type: EDIT_EXERCISE, updatedExercise });
  };
}
