import { useShowPassword } from "../../hooks/useShowPassowrd";
import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../feactures/auth/actions_login";
export const Login = () => {
  const [user, setUser] = useState({ usernames: "", password: "" });
  const dispatch = useDispatch();

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
    <main className="container Login d-flex">
      <form onSubmit={handleSubmit} className="form-group w-50 mt-5">
        <input
          className="form-control"
          type="text"
          name="usernames"
          value={user.usernames}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          className="form-control"
          type={showPassword ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />

        <div>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={password_hidden}
          />
          <p>show password</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </main>
  );
};
