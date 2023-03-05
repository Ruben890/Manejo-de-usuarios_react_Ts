import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "../page/admin/admin";
import { AgregarUsuario } from "../page/AgregarUsuario/AgregarUsuario";
import { Login } from "../auth/login/Login";
import { VerUsuarios } from "../page/VerUsuarios/VerUsuarios";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
        <Route path="/VerUsuarios" element={<VerUsuarios />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
