import React from "react";
import ContactCard from './ContactCard'

const ContactList = (props)=>{
    
    //props.contacts.map((contact) this works as like 'for each loop'
    const renderContactList = props.contacts.map((contact)=>{
        return(
            < ContactCard contact={contact}></ContactCard>
        )
    })

    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList