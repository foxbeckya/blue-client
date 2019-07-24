import React, {useState} from 'react';
// import Login from './Login';
// import Signup from './Signup';
import './Auth.css';

const Auth = (props) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [login, setLogin] = useState(true);

const title = () => {
  return (login ? 'Log In' : 'Sign Up');
}
  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);
    setUsername('');
    setPassword('');
   }

   const signupFields =() => !login ? 
   (<div>
   </div>) : null


   const handleSubmit=(e) => {
    e.preventDefault();
    let url = login ? 'http://localhost:3000/user/signin' : 'http://localhost:3000/user/createuser';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {(props.setSession(json.sessionToken));  
     localStorage.setItem(json.sessionToken)})
    .catch(err => console.log(err))
  }

  return(
      <div id="infoform">
      <form onSubmit={handleSubmit} className="cardLike">
      <h2 className="lisu">{title()}</h2>
        <input className="fields" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        <label className="labels" htmlFor="username">Username</label><br/>
        <input className="fields" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <label className="labels" htmlFor="password">Password</label><br/>
        {signupFields()}
        <button id="submit" type="submit">Submit</button>
        <br/>
         <button className="toggle" tabIndex="toggle" onClick={loginToggle}>Select Log In/Sign Up</button>;
         <br/>
       </form>
    </div>
  )
 }

export default Auth;