import React, { useEffect, useState, } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { addcontact, editcontact } from '../redux/actions/contactActions'
import {useNavigate} from 'react-router-dom'
function AddContact() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const contact = useSelector(state => state.contactReducer.contact)
    const edit = useSelector(state => state.contactReducer.edit)



useEffect(() => {
if (edit)  {setName(contact.name);setEmail(contact.email);setAge(contact.age)}
else {setName('');setEmail('');setAge(0)}
}, [])





    return (
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control onChange={(e)=>setAge(e.target.value)} value={age} type="number" placeholder="enter your age" />
  </Form.Group>
  
  {edit ? <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(editcontact(contact._id,{name,age,email},navigate))}}      type="submit">
    Edit contact
  </Button>: <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(addcontact({name,age,email},navigate))}}      type="submit">
    Add contact
  </Button>}
 
</Form>
    )
}

export default AddContact
