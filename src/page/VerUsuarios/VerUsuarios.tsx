import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { Login } from "../../auth/login/Login";
import { useAppSelector } from "../../apps/hook";
import "./VerUsuarios.css";

export const VerUsuarios = () => {
  const usersState = useAppSelector((state) => state.users.users);
  const is_Authenticated = useAppSelector(
    (state) => state.admin.is_Authenticated
  );
  return is_Authenticated ? (
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
  ) : (
    <Login />
  );
};
