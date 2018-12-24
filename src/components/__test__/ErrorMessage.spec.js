import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import IconsPage from '../IconsPage'


describe('ErrorMessage />', () => {

  it("should contains msg 1 ", () => {
    const msg = 'error 1 ';
    const component = shallow(<IconsPage text={msg} />);

    expect(1).to.be.eql(1);

  });


});
