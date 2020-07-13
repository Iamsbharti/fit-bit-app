import { url } from "./apiUtils";
import axios from "axios";
import { toast } from "react-toastify";
export async function musclesApi() {
  try {
    let { data, status } = await axios.get(url + "/getMuscles");
    //console.log(data, status);
    if (status === 200) {
      toast.success("Muscles Fetched");
      return data;
    } else {
      //throw new Error();
      return data;
    }
  } catch (error) {
    console.warn(error);
    toast.warn(error.message);
  }
}
