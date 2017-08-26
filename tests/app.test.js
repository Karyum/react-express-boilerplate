import React from 'react';
import { mount, render, shallow } from 'enzyme';

import App from '../app/app.js';

describe('App component', () => {
  it('shoudl test if innerHTML exists', () => {
    expect(shallow(<App />).contains(
      <h1 className="app"> Hello React, Im the new Component </h1>
    )).toBe(true)
  })

  it('Should render the full DOM', () => {
    expect(mount(<App />).find('.app').length).toBe(1)
  })

  it("Should render static HTML", () => {
    expect(render(<App />).text()).toEqual(' Hello React, Im the new Component ')
  })
})
