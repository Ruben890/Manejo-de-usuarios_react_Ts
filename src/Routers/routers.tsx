import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "../page/admin/admin";
import { AgregarUsuario } from "../page/AgregarUsuario/AgregarUsuario";
import { VerUsuarios } from "../page/VerUsuarios/VerUsuarios";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
        <Route path="/VerUsuarios" element={<VerUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
