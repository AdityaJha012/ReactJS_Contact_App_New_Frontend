import React from "react";
import userNew from "../images/userNew.jpg";
import { Link, useParams } from "react-router-dom";

const ContactDetail = (props) => {
    const { userId } = useParams();
    const contact = props.contacts.filter(contact => contact.userId === userId);
    console.log(contact);
    return(
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={userNew} alt="User" className="w-full h-96 object-cover" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{ contact[0].firstName + " " + contact[0].middleName + " " + contact[0].lastName }</h2>
                    <p className="text-gray-600">{ contact[0].emailId }</p>
                    <p className="text-gray-600">{ contact[0].mobileNo }</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Back to List</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;