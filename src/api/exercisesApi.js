import { url } from "./apiUtils";
import axios from "axios";
import { toast } from "react-toastify";

export async function fetchExercises() {
  try {
    let { data, status } = await axios.get(url + "/getExercises");
    //console.log("api-exer");
    if (data && status === 200) {
      toast.success("Exercises fetched");
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.warn(error.message);
    toast.error(error.message);
  }
}

export async function createExcercise(exercise) {
  //console.log("create-exercise", exercise);
  try {
    let { data, status } = await axios.post(url + "/createExercise", {
      id: exercise.id,
      title: exercise.title,
      muscles: exercise.muscles,
      description: exercise.description,
    });
    if (data && status === 200) {
      toast.success(`${data}`);
      return exercise;
    }
  } catch (error) {
    console.warn(error.message);
    toast.error(error.message);
  }
}

export async function deleteExercise(exerciseId) {
  //console.log("delete exercise", exerciseId);
  try {
    let { data, status } = await axios.delete(url + "/deleteExercise", {
      data: { id: exerciseId },
    });
    //console.log(data);
    if (data && status === 200) {
      toast.success(`${data}`);
      return exerciseId;
    }
  } catch (error) {
    console.warn(error.message);
    console.log(error.message);
  }
}
export async function editExercise(updatedExercise) {
  //console.log("updating exercise", updatedExercise);
  const { id, title, muscles, description } = updatedExercise;
  try {
    let { data, status } = await axios.put(url + "/editExercise", {
      id,
      title,
      muscles,
      description,
    });
    if (data && status === 200) {
      toast.success(`${updatedExercise.title} updated`);
      return updatedExercise;
    }
  } catch (error) {
    console.warn(error.message);
    toast.error(error.message);
  }
}
