import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [buttonColour, setButtonColour] = useState('mediumvioletred');
  const [disabled, setdisabled] = useState(false);

  const newButtonColour = buttonColour === 'mediumvioletred' ? 'midnightblue' : 'mediumvioletred';

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
