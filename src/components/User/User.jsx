import React from "react";
import s from "./User.module.scss";

const User = ({ name, email, setSelectedUser, user, id, deleteUser }) => {

    const handleClickDelete = (e) => {
        e.stopPropagation()
        deleteUser(id)
    }

  return (
    <div className={s.user} onClick={() => setSelectedUser(user)}>
      <div className={s.user_content}>
        <h2>
          <b>Name:</b> {name}
        </h2>
        <h4>
          <b>Email:</b> {email}
        </h4>
      </div>
      <div className={s.user_btn}>
        <button onClick={handleClickDelete}>Удалить пользователя</button>
      </div>
    </div>
  );
};

export default User;
