import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColour, setButtonColour] = useState('red');
  const [disabled, setdisabled] = useState(false);

  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        onClick={() => { setButtonColour(newButtonColour) }}
        style={{ backgroundColor: disabled ? 'gray' : buttonColour }}
        disabled={disabled}>
        Change to {newButtonColour}</button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setdisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
