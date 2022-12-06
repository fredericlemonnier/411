import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'
// import { logout } from "../actions/currentUser.js"
// import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.css'

function Navbar1() {
    // const history = useHistory()

    // const handleLogoutClick = () => {
    //     logout()
    //     history.push('/')
    // }

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="mb-2">
            <Button to="/user" className="mx-3">Breweries you save</Button>
            
            <Navbar inline className="mx-3" >
            <ButtonGroup className="mx-5">
                    <Button className="mx-4" to="/login">Login</Button>
                    <Button className="mx-4" to="/signup">Signup</Button>
                </ButtonGroup>
            </Navbar>
        </Navbar>
    )
}

// function mapStateToProps(state) {
//     return { currentUser: state.currentUser }
//   }

// export default connect(mapStateToProps, { logout } )(GlobalNavbar)
export default Navbar1;