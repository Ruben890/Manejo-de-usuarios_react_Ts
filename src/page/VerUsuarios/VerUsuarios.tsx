import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { useState, useEffect } from "react";
import { Login } from "../../auth/login/Login";

interface User {
  username: string;
  password: string;
}
export const VerUsuarios = () => {
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

  return (
    <>
      <Header />
      <MenuSidebar />
    </>
  );
};
