import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
//   const { loginUser } = useContext(AuthContext);
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const inputs = {name: username, email: email, password: password}
    // console.log(inputs)
    localStorage.setItem("name", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    // // await axios({
    //   method: 'post',
    //   url:'http://127.0.0.1:8000/login/',
    //   data: inputs,
    // }).then(
    //   response => {console.log(response)})
     
    history('/');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Email Address" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;