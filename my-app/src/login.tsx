import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginType, setLoginType] = useState('user'); // Default to user login

  const navigate = useNavigate();

  const onUserLoginClick = () => {
    // Hardcoded user credentials
    const hardcodedUser = { username: 'user123', password: 'password123' };

    // Set initial error values to empty
    setUsernameError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if (username === '') {
      setUsernameError('Please enter your username');
      return;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      return;
    }

    // Validate user credentials
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      navigate('/HomePage');
    } else {
      setUsernameError('Invalid username or password');
    }
  };

  const onStaffLoginClick = () => {
    // Hardcoded staff credentials
    const hardcodedStaff = { username: 'staff123', password: 'staffpass123' };

    // Set initial error values to empty
    setUsernameError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if (username === '') {
      setUsernameError('Please enter your username');
      return;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      return;
    }

    // Validate staff credentials
    if (username === hardcodedStaff.username && password === hardcodedStaff.password) {
      navigate('/StaffHomePage');
    } else {
      setUsernameError('Invalid username or password');
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={username}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{usernameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'} style={{ display: 'flex', flexDirection: 'row' }}>
        <input className={'inputButton'} type="button" onClick={onUserLoginClick} value={'Log in as User'} />
        <input className={'inputButton'} type="button" onClick={onStaffLoginClick} value={'Log in as Staff'} />
      </div>
    </div>
  );
};

export default Login;