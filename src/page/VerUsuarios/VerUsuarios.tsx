import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { useState, useEffect } from "react";
import { Login } from "../../auth/login/Login";
import { useAppSelector } from "../../apps/hook";
import { List } from "reselect/es/types";
import "./VerUsuarios.css";

interface User {
  username: string;
  password: string;
}
export const VerUsuarios = () => {
  const usersState = useAppSelector((state) => state.users.users);

  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const userString = localStorage.getItem("user");
    if (loggedIn && userString) {
      setLoggedIn(true);
      setUser(JSON.parse(userString));
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (!loggedIn) {
    return <Login />;
  }
  console.log(usersState);
  return (
    <>
      <Header />
      <MenuSidebar />
      <main className="container VerSusuarios">
        {usersState.map((user) => {
          return (
            <div key={user.id} className="card-content">
              <i className="bi bi-person-circle"></i>
              <h4>id:{user.id}</h4>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.sex}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};
