import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import Server from "../api/Server";

const App = () => {
  const[contacts, setContacts] = useState([]);
  
  // For Fetching Contacts
  const fetchContactDetails = async () => {
    const response = await Server.get("/rest/fetchContactDetails");
    return response.data;
  }

  // For Adding Contacts
  const addContactDetails = async (contactDetails) => {
    const response = await Server.post("/rest/addContactDetails", contactDetails);
    setContacts([...contacts, response.data]);
  }

  useEffect(() => {
    const getAllContactsList = async () => {
      const allContactsList = await fetchContactDetails ();
      if(allContactsList) setContacts(allContactsList);
    }
    getAllContactsList();
  }, []);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ContactList contacts = { contacts }/>}/>
          <Route path="/addContact" element={<AddContact addContactHandler = { addContactDetails }/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
