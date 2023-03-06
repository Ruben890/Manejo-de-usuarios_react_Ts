import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { Header } from "../../components/header/header";
import { Login } from "../../auth/login/Login";
import { useAppSelector } from "../../apps/hook";

export const Admin = () => {
  const is_Authenticated = useAppSelector(
    (state) => state.admin.is_Authenticated
  );
  return is_Authenticated ? ( ///esta condicion es para saber si el usuario esta autenticado y si lo estas se motrara la pagina, y si no lo esta tendra que logeaser como USERADMIN//
    <>
      {/* Header */}
      <Header />
      {/* menu_sidebar  */}
      <MenuSidebar />
    </>
  ) : (
    <Login />
  );
};
