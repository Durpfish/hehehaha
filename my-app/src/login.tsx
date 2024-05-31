import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Hardcoded credentials
    const hardcodedUsername = 'user123';
    const hardcodedPassword = 'password123';

    setUsernameError('');
    setPasswordError('');

    if (username === '') {
      setUsernameError('Please enter your username');
      return;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      return;
    }

    if (username !== hardcodedUsername) {
      setUsernameError('Invalid username');
      return;
    }

    if (password !== hardcodedPassword) {
      setPasswordError('Invalid password');
      return;
    }

    navigate('/HomePage');
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
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  );
};

export default Login;
