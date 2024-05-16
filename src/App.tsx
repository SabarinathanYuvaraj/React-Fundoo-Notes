import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Note from './components/CreateNote';
import NoteCard from './components/NoteCard';
import NavBar from './components/NavBar';
import RoutingModule from './RoutingModule';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       
        {/* <Signup/> */}
        {/* <Login/> */}
        {/* <Note/> */}
        {/* <NoteCard/> */}
        {/* <NavBar/> */}
        <RoutingModule/>
    </div>
  );
}

export default App;
