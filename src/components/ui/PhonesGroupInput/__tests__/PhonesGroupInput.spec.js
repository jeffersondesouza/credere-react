import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import PhonesGroupInput from '../index'


describe('PhonesGroupInput />', () => {

  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhonesGroupInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({ phone: {} });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      sinon.assert.notCalled(stateSpy);

    });
  });


  describe('addPhoneInput()', () => {

    it("should add an phone to emails list", () => {
      const validation = { parentNameValid: true };
      const onChange = sinon.spy();
      
      const wrapper = mount(<PhonesGroupInput
        validation={validation}
        onChange={onChange} />
      )

      wrapper.instance().addPhoneInput({ value: 'email' });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');
      sinon.assert.notCalled(stateSpy);
      expect(wrapper.instance().state.phones.length).to.eq(2);

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
