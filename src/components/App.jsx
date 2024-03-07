import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import Server from "../api/Server";

const App = () => {
  const[contacts, setContacts] = useState([]);
  const[searchTerm, setSearchTerm] = useState([]);
  const[searchResults, setSearchResults] = useState([]);
  
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

  // For Deleting Contacts
  const deleteContactDetails = async (userId) => {
    await Server.delete(`/rest/deleteContactDetails/${userId}`);
    const newContactList = contacts.filter((contact) => {
      return contact.userId !== userId;
    });
    setContacts(newContactList);
  }

  // For Restoring Contacts
  const restoreContactDetails = async (userId) => {
    await Server.put(`/rest/restoreContactDetails/${userId}`);
    const newContactList = contacts.filter((contact) => {
      return contact.userId !== userId;
    });
    setContacts(newContactList);
  }

  // Contacts Filter Using Search Box
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const filteredContactUserList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredContactUserList);
    } else {
      setSearchResults(contacts);
    }
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
          <Route path="/" element={<ContactList contacts = {(searchTerm.length < 1 ? contacts : searchResults)} deleteContactHandler={ deleteContactDetails } restoreContactHandler={ restoreContactDetails } term={ searchTerm } searchKeyword={ searchHandler }/>}/>
          <Route path="/addContact" element={<AddContact addContactHandler = { addContactDetails }/>}/>
          <Route path="/contactOtherDetails/:userId" element={<ContactDetail contacts = { contacts }/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
