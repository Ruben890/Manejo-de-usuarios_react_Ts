import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import "./AgregarUsuario.css";
import { useState, useEffect } from "react";
import { Login } from "../../auth/login/Login";

interface User {
  username: string;
  password: string;
}

export const AgregarUsuario = () => {

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
      <main className="container">
        <form className="Agregar">
          <h3>Agregar Nuevo Usuarios</h3>
          <div className="form-group">
            <div className="d-block p-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Apellido"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Segundo Apellido"
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Cedula"
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Edad"
              />

              <label className="form-label">Sexo:</label>
              <select className="form-select">
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>

            <div className="d-block p-3">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Direccion"
              />
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Teléfono"
              />
              <input
                type="email"
                className="form-control mb-1"
                placeholder="Correo electrónico"
              />
              <label className="form-label">Estado Civil:</label>
              <select name="estado civil" className="form-select mb-1">
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
              </select>
              <label className="form-label">Tiene Hijos ?</label>
              <select name="Tienes hijo" className="form-select mb-1">
                <option value="SI">Si</option>
                <option value="No">No</option>
              </select>
              <label className="form-label">Fecha de nacimiento:</label>
              <input type="date" className="form-control mb3" />
            </div>
            {/* Botton de movie */}
            <div className="buttom">
              <button className="btn btn-primary">Agregar Usuario</button>
            </div>
          </div>
          {/* botton de escritorio */}
          <div className="buttom1">
            <button className="btn btn-primary">Agregar Usuario</button>
          </div>
        </form>
      </main>
    </>
  );
};
