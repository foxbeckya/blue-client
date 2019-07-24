import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
//import Games from '.***********************************************************';

// import {
//   BrowserRouter as Router,
// } from ‘react-router-dom’;


function App() {
 const [sessionToken, setSessionToken] = useState('');


 useEffect(() => {
  if (localStorage.getItem('sessionToken')){
    setSessionToken(localStorage.getItem('sessionToken'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('sessionToken', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

 const clearToken = () => {
   localStorage.clear();
   setSessionToken('');
 }

//  const viewConductor =() => {
//    return sessionToken !== undefined ? <Games />: <Auth setSession={setSessionToken}/>
//  }

 return (
  <div>
          <Navbar clearToken={clearToken}/>
      {/* {sessionToken === localStorage.getItem('sessionToken') ? <Games sessionToken={sessionToken}/>
        : <Auth updateToken={updateToken}/>} */}
        {/* {viewConductor()} */}

  </div>
);
}

export default App;