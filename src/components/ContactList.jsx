import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const searchInput = useRef("");

  const deleteContactDetails = (id) => {
    props.deleteContactHandler(id);
  }

  const restoreContactDetails = (id) => {
    props.restoreContactHandler(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return(
      <ContactCard contact = { contact } deleteHandler = { deleteContactDetails } restoreHandler = { restoreContactDetails } />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(searchInput.current.value);
  }

  return (
    <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold underline mb-4">Contact List
            <Link to="/addContact">
                <button className="bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-3 px-4 rounded-lg float-right text-lg"><i className="fas fa-user-plus mr-2"></i>Add Contact</button>
            </Link>
        </h2>
        <br />

        <input type="text" ref={ searchInput }
            placeholder="Search Contacts..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 mb-4" value={ props.term } onChange={ getSearchTerm }/>

        <div className="grid grid-cols-1 gap-4">
          { renderContactList.length > 0 ? renderContactList : "No Contacts Available!" }
        </div>
    </div>
  )
}

export default ContactList;