import React from 'react';
import './index.css';
function App ({ name }) {
  return (
    <div className="App">
      <h1>Hello <b> {name} </b></h1>
      <p>This is the first assignment to learn react</p>
      <p>JSX expression  </p> {5 + 10}
    </div>
  );
}

export default App;
