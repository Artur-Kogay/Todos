import React, { useState } from "react";
import s from "./Header.module.scss";
import UserAddModal from "../UserAddModal/UserAddModal";

const Header = ({users, setUsers, setSearch, search}) => {
  const [modal, setModal] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.header_search}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Поиск" />
      </div>
      <div className={s.header_btn}>
        <button onClick={() => setModal(true)}>Добавить пользователя</button>
      </div>
      {
        modal && <UserAddModal modal={modal} setModal={setModal} setUsers={setUsers} users={users}/>
      }
    </header>
  );
};

export default Header;
