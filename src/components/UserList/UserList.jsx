import React, { useEffect, useState } from "react";
import s from "./UserList.module.scss";
import axios from "axios";
import { USERS } from "../../api/API";
import User from "../User/User";
import UserModal from "../UserModal/UserModal";
import { getUsers } from "../../api/getUsers";
import { deleteUsers } from "../../api/deleteUsers";

const UserList = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const deleteUser = async (id) => {
    await deleteUsers(id);
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
  };

  return (
    <main className={s.users}>
      {users !== 0 ? users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            setSelectedUser={setSelectedUser}
            user={user}
            deleteUser={deleteUser}
          />
        );
      }) : <h1>Loading...</h1>}
      {selectedUser && (
        <UserModal
          name={selectedUser.name}
          email={selectedUser.email}
          address={selectedUser.address}
          phone={selectedUser.phone}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </main>
  );
};

export default UserList;
