import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Games from './components/Games/Games';
//import Switches from './components/Switches';

// import {
//   BrowserRouter as Router,
// } from "react-router-dom";


function App() {
 const [sessionToken, setSessionToken] = useState('');


 useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(newToken);
}

 const clearToken = () => {
   localStorage.clear();
   setSessionToken('');
 }

 const viewConductor =() => {
   return sessionToken !== '' ? <Games token={sessionToken}/>: <Auth updateToken={updateToken}/>
 }

 return (
  <div>
          <Navbar clearToken={clearToken}/>
        {viewConductor()}

  </div>
);
}

export default App;