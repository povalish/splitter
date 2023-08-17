import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello from Electron!')).toBeTruthy();
  });
});
