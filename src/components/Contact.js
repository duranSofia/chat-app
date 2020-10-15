import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact (props){
  return(
    <div className = "Contact">
      <Avatar avatar={props.avatar}/>
      <Name name={props.name}/>
      <Status online={props.online}/>
    </div>
  )
}

function Avatar(props){
  return(
    <img className = "avatar" src={props.avatar}/>
  );
}

function Name(props){
  return(
    <div>
      <p className = "name">{props.name}</p>
    </div>
  );
}

function Status(props){
  return(
    <div className = "status">  
      <div>
        <div className ={props.online ? "status-online": "status-offline"}></div>
        <p className = "status-text">{props.online ? "online" : "offline "}</p>
      </div> 
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;