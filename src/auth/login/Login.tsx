import { useShowPassword } from "../../hooks/useShowPassowrd";
import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../feactures/auth/actions_login";
import { useAppSelector } from "../../apps/hook";
export const Login = () => {
  const [user, setUser] = useState({ usernames: "", password: "" });
  const dispatch = useDispatch();
  const message = useAppSelector((state) => state.admin.message);

  const handleChange = (event: { target: HTMLInputElement }) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginSuccess(user));
  };

  const { showPassword, password_hidden } = useShowPassword();
  return (
    <main className="container Login d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="form-group w-50"
        style={{ position: "relative", top: "6rem" }}
      >
        <fieldset className="d-flex justify-content-center  mb-5">
          <h1>login Admin</h1>
        </fieldset>
        <input
          className="form-control mb-3 is_valid"
          type="text"
          name="usernames"
          value={user.usernames}
          onChange={handleChange}
          placeholder="username"
          required
        />
        <input
          className="form-control mb-1"
          type={showPassword ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <div className="message text-danger">
          <p>{message}</p>
        </div>

        <div className="d-flex">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={password_hidden}
          />
          <p className="ms-2" style={{ position: "relative", top: "0.4rem" }}>
            show password
          </p>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-primary w-50">
            Iniciar sesión
          </button>
        </div>
      </form>
    </main>
  );
};
