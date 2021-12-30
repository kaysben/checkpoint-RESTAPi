import React from 'react'
import ContactCard from './ContactCard'
import {useSelector} from "react-redux"
function ContactList() {
    const contacts = useSelector(state => state.ContactReducer.contacts)
    console.log(contacts)
    return (
        <div>
         
            {contacts.map(contact=><ContactCard contact={contact} key={contact._id}     ></ContactCard>)}
        </div>
    )
}

export default ContactList

