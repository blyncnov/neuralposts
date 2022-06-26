import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileComponent = () => {
  const createNewStudentHandler = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const middleName = e.target.middleName.value;
    const ninmc = e.target.ninmc.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const dateOfBirth = e.target.dateOfBirth.value;
    const gender = e.target.gender.value;
    const religion = e.target.religion.value;

    axios
      .post("https://ict-chain-01.herokuapp.com/NinDummy/createnindummy", {
        firstName,
        lastName,
        middleName,
        ninmc,
        email,
        phoneNumber,
        dateOfBirth,
        gender,
        religion,
      })
      .then((res) => {
        console.log(res);
        toast.success("Account Successfully Created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data.description, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <div className="wordmote">
        <p>
          <strong>Note :</strong>
          <br />
          <br />
          Abeg, no enter your real data oh , you can Choose a New Identity for
          yourself &apos;dummy data .
        </p>
      </div>
      <div className="NeuralPost__Constraint">
        <ToastContainer />

        <div className="profile__overview">
          <br />
          <div className="profile__other__infomation">
            <div className="profile__dashboard__widget extra__additional__info">
              <h4>Create New NINMC Record</h4>
              <br />
              <hr />
              <br></br>
              <form onSubmit={createNewStudentHandler}>
                <label htmlFor="fname">First Name:</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  name="firstName"
                  // value={userEditInfo.matricNo}
                  onChange={(e) => e.target.value}
                  required
                />
                <label htmlFor="fname">Last Name:</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lastName"
                  // value={userEditInfo.matricNo}
                  onChange={(e) => e.target.value}
                  required
                />
                <label htmlFor="fname">Middle Name:</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your Middle Name"
                  name="middleName"
                  // value={userEditInfo.matricNo}
                  onChange={(e) => e.target.value}
                  required
                />

                <label htmlFor="fname">NINMC Number:</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your NINMC number"
                  name="ninmc"
                  maxLength={11}
                  // value={userEditInfo.matricNo}
                  onChange={(e) => e.target.value}
                  required
                />

                <label htmlFor="fname">Email address:</label>
                <br></br>
                <input
                  type="email"
                  placeholder="Provide valid email address"
                  name="email"
                  // value={userEditInfo.email}
                  onChange={(e) => e.target.value}
                  required
                />

                <label htmlFor="fname">Phone Number:</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your Phone Number"
                  name="phoneNumber"
                  required
                  onChange={(e) => e.target.value}
                />

                <label htmlFor="fname">Date Of Birth :</label>
                <br></br>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  required
                  onChange={(e) => e.target.value}
                />

                <label htmlFor="fname">Gender :</label>
                <br></br>
                <select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label htmlFor="fname">Religion :</label>
                <br></br>
                <select name="religion">
                  <option value="choose">Choose an option</option>
                  <option value="Christain">Christian</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Others">Others</option>
                </select>

                <button type="submit" className="changepassword">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default ProfileComponent;
