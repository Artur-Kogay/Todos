import axios from "axios";
import { USERS } from "./API";

export const getUsers = async () => {
  try {
    const responce = await axios.get(USERS);
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};
