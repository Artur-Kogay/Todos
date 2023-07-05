import React from "react";
import s from "./UserModal.module.scss";
import { Modal } from "antd";

const UserModal = ({
  name,
  email,
  address,
  phone,
  selectedUser,
  setSelectedUser,
}) => {

  
  return (
    <Modal
      title="Данные о пользователе"
      visible={!!selectedUser}
      onOk={() => setSelectedUser(null)}
      onCancel={() => setSelectedUser(null)}
    >
      <div className={s.modal_content}>
        <h2>
          <i>Name: </i>
          {name}
        </h2>
        <h2>
          <i>Email: </i>
          {email}
        </h2>
        <h2>
          <i>Address: </i>
          {address}
        </h2>
        <h2>
          <i>Phone: </i>
          {phone}
        </h2>
      </div>
    </Modal>
  );
};

export default UserModal;
