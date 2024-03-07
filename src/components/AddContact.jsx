import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddContact extends Component {
    state = {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dateOfBirth: null,
        companyName: "",
        jobTitle: "",
        officeAddress: "",
        annualIncome: "",
        emailId: "",
        mobileNo: "",
        address: "", 
        remarks: ""
    }

    addContact = (event) => {
        event.preventDefault();

        if (this.state.firstName === "" || this.state.middleName === "" || this.state.lastName === "" || this.state.gender === "" ||
            this.state.dateOfBirth === null || this.state.companyName === "" || this.state.jobTitle === "" || 
            this.state.officeAddress === "" || this.state.annualIncome === "" || this.state.emailId === "" || 
            this.state.mobileNo === "" || this.state.address === "") {
            alert("All the Fields are Mandatory!");
            return;
        }

        // Convert date of birth to the desired string format
        const formattedDateOfBirth = this.state.dateOfBirth ? this.formatDate(this.state.dateOfBirth) : '';

        // Prepare the contact details object with the formatted date of birth
        const contactDetails = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            dateOfBirth: formattedDateOfBirth,
            companyName: this.state.companyName,
            jobTitle: this.state.jobTitle,
            officeAddress: this.state.officeAddress,
            annualIncome: this.state.annualIncome,
            emailId: this.state.emailId,
            mobileNo: this.state.mobileNo,
            address: this.state.address,
            remarks: this.state.remarks
        };

        this.props.addContactHandler(contactDetails);
        this.setState({ firstName: "", middleName: "", lastName: "", gender: "", dateOfBirth: null, companyName: "", jobTitle: "", officeAddress: "", annualIncome: "", emailId: "", mobileNo: "", address: "", remarks: ""  });
        this.props.history.push("/");
    }

    // Function to format the date in "dd-MM-yyyy" format
    formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    }

    render() {
        return(
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold underline mb-4">Add Contact Details</h2>
                <form className="ui form" onSubmit={ this.addContact }>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                            <input type="text" name="firstName" id="firstName" placeholder="Enter first Name..." value={ this.state.firstName } onChange={(e) => this.setState({ firstName: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label htmlFor="middleName" className="block text-gray-700 font-bold mb-2">Middle Name</label>
                            <input type="text" name="middleName" id="middleName" placeholder="Enter Middle Name..." value={ this.state.middleName } onChange={(e) => this.setState({ middleName: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
                            <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name..." value={ this.state.lastName } onChange={(e) => this.setState({ lastName: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Gender</label>
                            <select name="gender" id="gender" value={ this.state.gender } onChange={(e) => this.setState({ gender: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                            <DatePicker name="dateOfBirth" id="dateOfBirth" selected={this.state.dateOfBirth}
                                onChange={(date) => this.setState({ dateOfBirth: date })} className="w-full block border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholderText="Select Date of Birth" dateFormat="dd-MM-yyyy"/>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
                            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name..." value={ this.state.companyName } onChange={(e) => this.setState({ companyName: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title</label>
                            <input type="text" name="jobTitle" id="jobTitle" placeholder="Enter Job Title..." value={ this.state.jobTitle } onChange={(e) => this.setState({ jobTitle: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="officeAddress" className="block text-gray-700 font-bold mb-2">Office Address</label>
                            <input type="text" name="officeAddress" id="officeAddress" placeholder="Enter Office Address..." value={ this.state.officeAddress } onChange={(e) => this.setState({ officeAddress: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="annualIncome" className="block text-gray-700 font-bold mb-2">Annual Income</label>
                            <input type="text" name="annualIncome" id="annualIncome" placeholder="Enter Annual Income..." value={ this.state.annualIncome } onChange={(e) => this.setState({ annualIncome: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" pattern="^[0-9]*$" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="emailId" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" name="emailId" id="emailId" placeholder="Enter Email Id..." value={ this.state.emailId } onChange={(e) => this.setState({ emailId: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="mobileNo" className="block text-gray-700 font-bold mb-2">Mobile No</label>
                            <input type="text" name="mobileNo" id="mobileNo" maxLength="10" placeholder="Enter Mobile No..." value={ this.state.mobileNo } onChange={(e) => this.setState({ mobileNo: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" pattern="^[0-9]*$" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                            <textarea name="address" id="address" placeholder="Enter Address..." value={ this.state.address } onChange={(e) => this.setState({ address: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="remarks" className="block text-gray-700 font-bold mb-2">Remarks</label>
                            <textarea name="remarks" id="remarks" placeholder="Enter Remarks If Any..." value={ this.state.remarks } onChange={(e) => this.setState({ remarks: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-white border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-bold py-2 px-4 rounded">
                            <i className="fas fa-save mr-2"></i> Save Contact
                        </button>
                        <div className="mx-4"></div>
                        <Link to="/">
                            <button className="bg-white border border-red-500 hover:bg-red-500 hover:text-white text-red-500 font-bold py-2 px-4 rounded">
                                <i className="fas fa-arrow-left mr-2"></i> Back to List
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;