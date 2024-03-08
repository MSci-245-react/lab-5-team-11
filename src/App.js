import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import { IncrementByAmount } from '/workspaces/lab-5-team-11/src/IncrementByAmount.js'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter /> {/* Render the Counter component */}
        <IncrementByAmount /> {/* Render the IncrementByAmount component */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
