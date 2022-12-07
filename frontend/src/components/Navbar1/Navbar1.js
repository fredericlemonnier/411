import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'
// import { logout } from "../actions/currentUser.js"
// import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Navbar1() {
    
    const history = useNavigate();

    // const handleLogoutClick = () => {
    //     logout()
    //     history.push('/')
    // }

    // const googleLogin = async (accesstoken) => {
    //     let res = await axios.post(
    //       "http://127.0.0.1:8000/auth/",
    //       {
    //         access_token: accesstoken,
    //       }
    //     );
    //     console.log(res);
    //     return await res.status;
    //   };

    // const responseGoogle = async(response) => {
    //     let googleResponse  = await googleLogin(response.accessToken)
    //     console.log(googleResponse);
    //     console.log(response);
    //   }
    const [ profile, setProfile ] = useState([]);
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        function start() {
        gapi.client.init({
        clientId:"73964776413-8vqrr54t5nhe8ut6m9ah9eejpkocle8v.apps.googleusercontent.com",
        scope: '',
          });
           }
          gapi.load('client:auth2', start);
           }, []);
    const onSuccess = async (res) => {
        console.log(res.profileObj);
        setProfile(res.profileObj);
        setName(res.profileObj.name);
        setToken(res.profileObj.googleId);
        setEmail(res.profileObj.email);
        localStorage.setItem("name", JSON.stringify(res.profileObj.name));
        localStorage.setItem("email", JSON.stringify(res.profileObj.email));
        localStorage.setItem("password", JSON.stringify(res.profileObj.password));
        // await axios.post('http://127.0.0.1:8000/signup', 
        // {name: res.profileObj.name, email: res.profileObj.email, password: res.profileObj.token}
        // ).then( response => {console.log(response)})
        
    }
    const onFailure = (res) => {
        console.log(res);
    }
    const logout = () => {
        // e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        // localStorage.clear();
        setProfile(null);
        setName("");
        setToken("");
        setEmail("");
        // history("/");
        localStorage.clear();
        history("/");
    }

    const routeChange1 = () =>{ 
        let path = '/login'; 
        history(path);
      }
    const routeChange2 = () =>{ 
        let path = '/register'; 
        history(path);
      }

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="mb-2">
            <Button to="/user" className="mx-3">Breweries you save</Button>
        
        <Navbar inline className="mx-3" >
            <ButtonGroup className="mx-5">
        {("name" in localStorage) ?(
            <GoogleLogout clientId="73964776413-8vqrr54t5nhe8ut6m9ah9eejpkocle8v.apps.googleusercontent.com"
             buttonText="Log out" onLogoutSuccess={logout} />
        ):(
            <GoogleLogin
          clientId="73964776413-8vqrr54t5nhe8ut6m9ah9eejpkocle8v.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={onSuccess}
          onFailure={onFailure}
        //   isSignedIn={true}
        />
        )}       
                    <Button className="mx-4" onClick={routeChange1}>Login</Button>
                    <Button className="mx-4" onClick={routeChange2}>Signup</Button>
                    
            </ButtonGroup>
            
        </Navbar>
        <div className="username">
                { ("name" in localStorage) && <Navbar className="mx-3"> {localStorage.getItem('name') } </Navbar>}
            </div>

        </Navbar>
        
    )
}

// function mapStateToProps(state) {
//     return { currentUser: state.currentUser }
//   }


export default Navbar1;