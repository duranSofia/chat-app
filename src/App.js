import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact avatar={"https://randomuser.me/api/portraits/women/0.jpg"} name={"Jeanette Mills"} online={true}/>
        <Contact avatar={"https://randomuser.me/api/portraits/women/67.jpg"} name={"Kristen Meyers"} online={true}/>
        <Contact avatar={"https://randomuser.me/api/portraits/men/61.jpg"} name={"Virgil Reid"} online={false}/>
    </div>
  );
}

export default App;
