import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerRegisterForm from '../index'


describe('CustomerRegisterForm />', () => {

  it("should init component", () => {
    const component = shallow(<CustomerRegisterForm />);
    expect(component.type()).to.be.eql('div');
  });

});
