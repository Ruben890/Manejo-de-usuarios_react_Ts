import { useShowPassword } from "../../hooks/useShowPassowrd";
import { useState } from "react";

interface User {
  username: string;
  password: string;
}

export const Login = () => {
  const { showPassword, password_hidden } = useShowPassword();

  const [user, setUser] = useState<User>({ username: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Verificar la información de inicio de sesión
    if (user.username === "admin" && user.password === "admin1098") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/admin";
    }
  };

  return (
    <>
      <main className="Login container d-flex justify-content-center">
        <form className="form-group w-50 p-3" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div>
            <label className="form=label">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="form-control mb-3"
            />
            <label className="form-label">Password</label>
            <input
              placeholder="Password"
              className="form-control mb-3"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="buttom">
            <button className="btn btn-primary">Iniciar seccion</button>
          </div>
        </form>
      </main>
    </>
  );
};
