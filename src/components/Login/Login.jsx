import React, { useState, useEffect } from 'react';
import { Overlay, FormBody, Alert } from './Login.styled';
import registrationHeader from '../../assets/registrationHeader.png';

export const Login = ({ closeModal, handleLogIn }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginInput = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Retrieves users from local storage.
    const savedUsers = localStorage.getItem('userSaved');
    const parsedUsers = savedUsers ? JSON.parse(savedUsers) : [];

    // Finds the user with matching email and password.
    const user = parsedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      handleLogIn(user);
      closeModal();
      window.location.href = "/";
    } else {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    const savedUsers = localStorage.getItem('userSaved');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  return (
    <Overlay>
      <FormBody onSubmit={handleLoginSubmit}>
        <div onClick={closeModal} className="close-form" />
        <div className="form-header">
          <img src={registrationHeader} alt="Disney and Star Wars official logos" />
        </div>
        <h1 className="form-title">Log in to your account</h1>
        <input
          onChange={handleLoginInput}
          type="text"
          name="email"
          placeholder="Email Address"
          className="form-control"
          required
        />
        <input
          onChange={handleLoginInput}
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          required
        />
        <button type="submit" className="submit-button">Sign In</button>
        {showAlert && <Alert>Incorrect credentials. Please, try again.</Alert>}
      </FormBody>
    </Overlay>
  );
};
