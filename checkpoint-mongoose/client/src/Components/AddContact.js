import React, { useEffect, useState, } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { addcontact, editcontact, getcontact } from '../redux/actions/contactActions'
import {useNavigate} from 'react-router-dom'
function AddContact() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const dispatch = useDispatch()
    const navigate=useNavigate()


    const [loding, setLoding]= useState(false)


   
    const edit = useSelector(state => state.ContactReducer.edit)
    const contact = useSelector(state => state.ContactReducer.contact)


useEffect(() => {
if (edit && edit)  {setName(contact && contact.name);setEmail(contact && contact.email);setAge(contact && contact.age)}
else {setName('');setEmail('');setAge(0)}
}, [edit,contact])





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
  
  
  
  
  {edit && edit ? <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(editcontact(contact._id,{name,age,email},navigate))}}      type="submit">
    Edit contact
  </Button>:
  
  
  <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(addcontact({name,age,email},navigate))}}      type="submit">
    Add contact
  </Button>}
 
</Form>
    )
}

export default AddContact
