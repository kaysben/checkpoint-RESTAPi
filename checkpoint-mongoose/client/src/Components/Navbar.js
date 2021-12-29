import { Link } from 'react-router-dom'
import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {useDispatch} from "react-redux"
import { getcontacts, togglefalse } from '../redux/actions/contactActions'
function Navbare() {
  const dispatch = useDispatch()
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Contact List</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link as = {Link} to='/contacts' onclick={()=>dispatch(getcontacts())}    >contacts</Nav.Link>
        <Nav.Link as = {Link} to='/addcontact' onclick={()=>dispatch(togglefalse())}     >Add</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbare
