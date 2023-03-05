import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import { Header } from "../../components/header/header";
import { Login } from "../../auth/login/Login";
import { useAppSelector } from "../../apps/hook";

export const Admin = () => {
  const is_Authenticated = useAppSelector(
    (state) => state.admin.is_Authenticated
  );
  return is_Authenticated ? (
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
