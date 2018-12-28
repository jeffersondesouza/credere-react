import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import EmailsGroupInput from '../index'


describe('EmailsGroupInput />', () => {

  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<EmailsGroupInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({ phone: {} });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      sinon.assert.notCalled(stateSpy);

    });
  });


  describe('addEmailInput()', () => {

    it("should add an email to emails list", () => {
      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<EmailsGroupInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );


      wrapper.instance().addEmailInput({ value: 'email' });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');
      sinon.assert.notCalled(stateSpy);
      expect(wrapper.instance().state.emailInputs.length).to.eq(2);

    });
  });

});




const PARERNT_MOCK = {
  id: '1',
  name: 'name',
  phone: {
    code: '22',
    nunber: '2222222',
  },
};
