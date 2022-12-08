import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'

const Profile = () => {
  const name = localStorage.getItem('name').slice(1, -1);
  const email = localStorage.getItem('email').slice(1, -1);
 
  return (
    <div>
        <div>name: {name}</div>
        <div>email: {email} </div>
    </div>
  )
}

export default Profile;

