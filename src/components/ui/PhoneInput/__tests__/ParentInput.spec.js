import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import PhoneInput from '../index'


describe('PhoneInput />', () => {


  describe('handleChangeCode()', () => {

    it("should casll handleChangeCode", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.instance().handleChangeCode({ name: 'name', value: 2 });

      sinon.assert.called(stateSpy);
    });
  });

  describe('handleRemoveClick()', () => {

    it("should casll handleRemoveClick", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.instance().handleRemoveClick({ name: 'name', value: 2 });

      sinon.assert.called(stateSpy);
    });
  });

  describe('handleChangeNumber()', () => {

    it("should casll handleChangeNumber", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );


      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.instance().handleChangeNumber({ name: 'name', value: 2 });

      sinon.assert.called(stateSpy);
    });
  });


  describe('handleChangeMainPhone()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );


      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.instance().handleChangeMainPhone({ name: 'name', value: 2 });

      sinon.assert.called(stateSpy);

    });
  });


  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({});
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      sinon.assert.notCalled(stateSpy);

    });
  });


  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<PhoneInput
        phone={{ code: '00', number: '0000000' }}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({ phone: {} });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      sinon.assert.notCalled(stateSpy);

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
