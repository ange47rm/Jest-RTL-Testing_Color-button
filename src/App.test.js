import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

// Functional Testing
test('button has the correct initial color and updates when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button).toHaveTextContent('Change to red');
});