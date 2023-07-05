import axios from "axios";
import React from "react";
import { USERS } from "./API";

export const deleteUsers = async (userId) => {
  try {
    await axios.delete(USERS + `/${userId}`);
  } catch (error) {
    console.log(error.message);
  }
};
