import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useAuth0 } from './react-auth0-spa';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Provider } from "react-redux";
import store from "./store";

jest.mock('./react-auth0-spa');

function setup() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('App', () => {

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      loading: false,
      user: {},
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
      token: '123'
    })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('title should be VUTTR', () => {

    setup();

    const heading = screen.getByRole('heading', { name: /vuttr/i });
    expect(heading).toBeInTheDocument()
  });
});
