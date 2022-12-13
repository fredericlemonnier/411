import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    const inputs = {name: username, password: password}
    //call backend database to verify user information
    await axios.post('http://127.0.0.1:8000/login/', inputs).then(
      (response => {
      if(response.data[0].password === undefined){
        console.log("log in failed")
      } else{
        localStorage.setItem("name", response.data[0].name);
      localStorage.setItem("email", response.data[0].email);
      localStorage.setItem("password", response.data[0].password);
      localStorage.setItem("breweries", ["brewery"]);
      console.log(response.data[0].email);
      history('/'); 
      }

    }))  
    
    
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        {/* <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Email Address" /> */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginPage;