import React, { useState } from 'react';
import { Logo } from './Logo';
import { Notif } from './Notif';


export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [arrow, setArrow] = useState('')

    const getArow = () => {
     setArrow(<img src='/arrow3.jpg' style={{borderRadius:'70%'}} />)
    }

  setInterval(() => {
    
    getArow()
  }, 200);

    const onSubmitHandler = (event) => {
      event.preventDefault();
      props.loginHandler(username, password);
    }
  
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
     

  
    return (
      <div id="login-page" >
        <div id="login">

          




          <Logo />
          <Notif message={props.notif.message} style={props.notif.style} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
            <button type="submit" className="btn">Login</button>
          </form>
          <p><hr /></p>
          <small>I don't have an account create <a href='#'>create ONE</a></small>
        </div>
      </div>
    )
}
