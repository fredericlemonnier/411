import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
//   const { loginUser } = useContext(AuthContext);
  const history = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // username.length > 0 && loginUser(username, password);
    history('/');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;