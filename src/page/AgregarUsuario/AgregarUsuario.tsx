import { Header } from "../../components/header/header";
import { MenuSidebar } from "../../components/menu_siderbar/menuSiderbar";
import "./AgregarUsuario.css";
import { useState, FormEvent } from "react";
import { addUsers } from "../../feactures/UserManager/userManage";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../apps/hook";
import { Login } from "../../auth/login/Login";

export const AgregarUsuario = () => {
  const is_Authenticated = useAppSelector(
    (state) => state.admin.is_Authenticated
  );
  const [users, setUsers] = useState({
    name: "",
    email: "",
    sex: "",
  });
  const Dispatch = useDispatch();

  const genericID = () => Math.floor(Math.random() * 999) + 1;

  const handleChange = (event: {
    target: HTMLInputElement | HTMLSelectElement;
  }) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Dispatch(
      addUsers({
        ...users,
        id: genericID(),
      })
    );
  };
  return is_Authenticated ? (
    <>
      <Header />
      <MenuSidebar />
      <main className="container">
        <form className="Agregar" onSubmit={handleSubmit}>
          <h3>Agregar Nuevo Usuarios</h3>
          <div className="form-group">
            <div className="d-block p-3">
              <input
                name="name"
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                onChange={handleChange}
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
              <select
                className="form-select"
                name="sex"
                onChange={handleChange}
              >
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
                onChange={handleChange}
                name="email"
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
  ) : (
    <Login />
  );
};
