import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Header from '../Header'


describe('Header />', () => {

  it("should be a header ", () => {
    const component = shallow(<Header />);
    expect(component.type()).to.be.contain('header');
  });


});
