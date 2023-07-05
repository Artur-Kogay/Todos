import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header/Header";
import UserList from "../components/UserList/UserList";
import { getUsers } from "../api/getUsers";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  const searchedAndNotSearchedUsers = useMemo(() => {
    if (search) {
      return users.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return users;
    }
  }, [search, users]);

  return (
    <div className="App">
      <div className="container">
        <Header
          setSearch={setSearch}
          search={search}
          users={searchedAndNotSearchedUsers}
          setUsers={setUsers}
        />
        <UserList users={searchedAndNotSearchedUsers} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
