import React, { useState } from 'react';
import { Overlay, FormBody } from './SignUp.styled';
import registrationHeader from '../../assets/registrationHeader.png';

export const SignUp = ({ closeModal }) => {
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignupInput = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signupData;

    if (!name || !email || !password) {
      alert('All fields are required');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email');
      return;
    }

    const newUser = { name, email, password };

    const existingUsers = localStorage.getItem('userSaved');
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    // Checks if the email already exists.
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert('Email account already exists');
      return;
    }

    users.push(newUser);

    localStorage.setItem('userSaved', JSON.stringify(users));

    setLoggedInUser(newUser);

    closeModal();
    alert(`Welcome, ${newUser.name}!`);
  };

  return (
    <Overlay>
      <FormBody onSubmit={handleSignupSubmit}>
        <div onClick={closeModal} className="close-form" />
        <div className="form-header">
          <img src={registrationHeader} alt="Disney and Star Wars official logos" />
        </div>
        <h1 className="form-title">Create your account</h1>
        <input
          onChange={handleSignupInput}
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          required
        />
        <input
          onChange={handleSignupInput}
          type="email"
          name="email"
          placeholder="Email Address"
          className="form-control"
          required
        />
        <input
          onChange={handleSignupInput}
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          required
        />
        <button type="submit" className="submit-button">Sign Up</button>
      </FormBody>
    </Overlay>
  );
};
