import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import App from './app/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={configureStore}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
