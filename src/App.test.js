import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { replaceCamelWithSpaces } from './App'

// Functional Testing
test('button has the correct initial color and updates when clicked', () => {
  // Render the app
  render(<App />);

  // Get button element by role
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // Expect button to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // Click on button
  fireEvent.click(button);

  // Expect button to be blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  // Expect button to have text content 'Change to red'
  expect(button).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  // Render the app
  render(<App />);

  // Check that the button starts out enabled
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();

  // Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(button).not.toBeChecked()
})

test('checkbox disables the button on first click, and enables it on second click', () => {
  // Render the app
  render(<App />);

  // Find button
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // Find checkbox by role (this uses the label for the checkbox - see App.js)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // Tick the checkbox
  fireEvent.click(checkbox);

  // Check that the button is disabled
  expect(button).toBeDisabled();

  // Tick the checkbox again
  fireEvent.click(checkbox);

  // Check that the button is enabled
  expect(button).toBeEnabled();
})

test('disabled button has gray background and reverts to red', () => {
  // Render the app
  render(<App />);

  // Click on the checkbox to disable the button
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);

  // Expect button to be gray
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // Re-enable the button using the checkbox
  fireEvent.click(checkbox);

  // Expect button to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });
})

test('clicked disabled button has gray background and reverts to blue', () => {
  // Render the app
  render(<App />);

  // Click button to change color
  const button = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(button);

  // Click on the checkbox to disable the button
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);

  // Button should be gray
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // Click on the checkbox to enable to button
  fireEvent.click(checkbox);

  // Button should be blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
})

describe('spaces before camel-case capital letters', () => {

  test('works for a colour with no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })

  test('works for a colour with one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })

  test('works for a colour with multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})