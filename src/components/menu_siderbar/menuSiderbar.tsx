import "./menuSiderbar.css";
import { Link } from "react-router-dom";
export const MenuSidebar = () => {
  return (
    <>
      {/* menu_sidebar */}
      <div className="menu_sidebar">
        <nav>
          <ul style={{ padding: "0px" }}>
            <Link to="/" title="Home_page">
              <li className="p-4">
                <i className="bi bi-house" title="Home_page"></i>
              </li>
            </Link>
            <Link to="/AgregarUsuario" title="AgregarUsuario">
              <li className="p-4">
                <i className="bi bi-person-add" title="agregar Usuarios"></i>
              </li>
            </Link>
            <Link to="/VerUsuarios" title="VerUsuarios">
              <li className="p-4">
                <i className="bi bi-people" title="ver susuarios"></i>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
