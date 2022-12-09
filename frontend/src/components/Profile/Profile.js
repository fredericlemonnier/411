import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup, Card, CardImg } from 'react-bootstrap'
import Particles from "react-tsparticles";
import './Profile.css'

const Profile = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const team = localStorage.getItem('team');
 
  return (
    <>
    <div className='info'>
    <div className='mx1'>Your info:</div>
        <div className='mx2'>name: {name}</div>
        <div className='mx3'>email: {email} </div>
        
    </div>
    <>
    <br/>
    </>
    <div className='team'>
      <div className='mx1'>Team you recently searched: </div>
      {("team" in localStorage) && <div className='mx3'>{team} </div>}
    </div>
    </>
    
  )
 
}

export default Profile;

