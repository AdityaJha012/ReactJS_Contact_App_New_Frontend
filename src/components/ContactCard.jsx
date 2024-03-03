import React from "react";
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { userId, firstName, middleName, lastName, emailId, mobileNo } = props.contact;
    return(
        <div className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
            <img src={user} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-grow">
                <Link to={{pathname: `/contactOtherDetails/${ userId }`}}>
                    <div className="text-lg font-semibold">{ firstName + " " + middleName + " " + lastName }</div>
                    <div className="text-gray-500">{ emailId }</div>
                    <div className="text-gray-500">{ mobileNo }</div>
                </Link>
            </div>
            <Link to={{pathname: `/updateContact/${userId}`}}>
                <button 
                    className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white text-xl cursor-pointer bg-white px-4 py-2 rounded-lg">
                    <i className="fa-solid fa-pencil mr-2"></i>Update
                </button>
            </Link>
            <div className="mx-2"></div>
            <button className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white text-xl cursor-pointer bg-white px-4 py-2 rounded-lg">
            <i className="fa-solid fa-trash-can mr-2"></i>Delete
            </button>
        </div>
    );
}

export default ContactCard;