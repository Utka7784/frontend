import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase Authentication
      const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
      const user = userCredential.user;

      // Access Firestore data if needed
      // const userData = await firebase.firestore().collection('users').doc(user.uid).get();
      // console.log('User Data:', userData.data());

      console.log('Login Successful:', user);
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
