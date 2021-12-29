import React from 'react'
import ContactCard from './ContactCard'
import {useSelector} from "react-redux"
function ContactList() {
    const contacts = useSelector(state => state.ContacReducer.contacts)
    return (
        <div>
            {contacts.map(contact=><ContactCard contact={contact} key={contact._id}     ></ContactCard>)}
        </div>
    )
}

export default ContactList

