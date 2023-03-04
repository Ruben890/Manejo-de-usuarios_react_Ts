import React, { useState } from "react";
import "./header.css";
export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  
  return (
    <>
      <header className="header_admin">
        <nav>
          <ul>
            <li className="uses">
              <i className="bi bi-person-circle" onClick={handleClick}></i>

              {isActive ? (
                <div className="cerrar_seccion">
                  <button onClick={handleLogout} className="btn">
                    Cerrar seccion
                  </button>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
