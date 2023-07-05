import { Modal } from "antd";
import React, { useState } from "react";
import s from "./UserAddModal.module.scss";
import { addUsers } from "../../api/addUsers";
import { getUsers } from "../../api/getUsers";

const UserAddModal = ({ modal, setModal, setUsers }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });

  const addUserOnServer = async () => {
    try {
      await addUsers(newUser);
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
      setModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Modal
      title="Форма добавления пользователя"
      visible={modal}
      onCancel={() => setModal(false)}
    >
      <div className={s.modal_fields}>
        <input
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          type="email"
          placeholder="email"
        />
        <input
          value={newUser.adress}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          type="text"
          placeholder="address"
        />
        <input
          value={newUser.number}
          onChange={(e) => setNewUser({ ...newUser, number: e.target.value })}
          type="number"
          placeholder="number"
        />
      </div>
      <div className={s.modal_btn_add}>
        <button onClick={() => addUserOnServer()}>Добавить пользователя</button>
      </div>
    </Modal>
  );
};

export default UserAddModal;
