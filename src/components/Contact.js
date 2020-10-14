import React from 'react';
import './Contact.css';

function Contact (){
  return(
    <div className = "Contact">
      <Avatar/>
      <Name/>
      <Status/>
    </div>
  )
}

function Avatar(){
  return(
    <img className = "avatar" src="https://randomuser.me/api/portraits/women/87.jpg" />
  );
}

function Name(){
  return(
    <div className = "name">
      Alice Sutton
    </div>
  );
}

function Status(){
  return(
    <div className = "status">
      <div>
        <div className = "status-online"></div>
        <div className = "status-text">online</div>
      </div>
      <div>
        <div className = "status-offline"></div> 
        <div className = "status-text">offline</div>  
      </div>
    </div>
  );
}

export default Contact;