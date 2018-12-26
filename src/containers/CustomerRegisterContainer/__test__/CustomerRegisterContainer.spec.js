import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerRegisterContainer from '../index'


describe('CustomerRegisterContainer />', () => {

  it("should init component", () => {
    const component = shallow(<CustomerRegisterContainer />);
    expect(component.type()).to.be.eql('div');
  });

});
