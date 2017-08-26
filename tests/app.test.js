import React from 'react';
import { mount, render, shallow } from 'enzyme';

import App from '../app/app.js';

describe('App component', () => {
  it('test if h1 exists', () => {
    expect(shallow(<App />).contains(
      <h1> Hello React, Im the new Component </h1>
    )).toBe(true)
  })
})
