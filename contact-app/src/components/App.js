import './App.css';
import React , {useState,useEffect} from 'react'
import Header from './Header'
import ContactList from './ContactList'
import AddContact from './AddContact'

function App() {

  const LOCAL_STORAGE_KEY = "contacts"

  const [contacts , setContacts] = useState([]) //React Hook---useState 'contacts' ki initial state ko empty array bna rha and jb usko uski state change krni ho toh voh  'setContacts' se change ho skti h
   
  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts,contact]) //(...contacts will spreadout items of contacts means a copy of contacts)this will add/append contacts + contact in setContact
   }

   //to get item from localstorage
   useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
    
    if(retriveContacts)
      setContacts(retriveContacts)
  },[])

  //to store in localstorageno
   useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)) //to store entered data in localstorage so even if we refresh the page...contacts will remain there only
   },[contacts/*here we write dependencies...for us it is contacts*/]) //whenever 'contacts' is changed this will work

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
    // contacts={contacts} used to pass contacts to ContactList then it can be accessed using "props" ....IF WE WANT TO PASS SOMETHING FROM PARENT TO CHILD WE USE PROPS
  );
}

export default App;
