import React from 'react';

import logout from '../../assets/logout.png';
import './Logout.css'

const Logout = (props) => {
return(
    <img onClick={() => props.clearToken()} 
    src={logout} 
    alt="logout" />
    )
}

export default Logout;