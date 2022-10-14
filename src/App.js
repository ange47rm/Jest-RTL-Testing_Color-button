import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColour, setButtonColour] = useState('red');

  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
      onClick={() => {setButtonColour(newButtonColour)}} 
      style={{ backgroundColor: buttonColour }}>
        Change to {newButtonColour}</button>
    </div>
  );
}

export default App;
