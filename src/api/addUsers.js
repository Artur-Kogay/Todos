import axios from 'axios';
import React from 'react'
import { USERS } from './API';

export const addUsers = async(user) => {
    try{
        const responce = await axios.post(USERS, user)
        return responce.data;
    }catch(error){
        console.log(error.message);
    }
}
