import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import DriveLicenceInput from '../index'


describe('DriveLicenceInput />', () => {


  describe('handleChange()', () => {

    it("should casll handleChange", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<DriveLicenceInput
        parent={PARERNT_MOCK}
        validation={validation}
        onChange={onChange} />
      );

      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.instance().handleChange({ name: 'name', value: 2 });


      wrapper.find('Input').at(0).simulate('change');

      sinon.assert.called(stateSpy);
    });
  });


  describe('handleRemoveClick()', () => {

    it("should casll handleChange", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<DriveLicenceInput
        parent={PARERNT_MOCK}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().handleRemoveClick();
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.find('RemoveButton').at(0).simulate('click');

      sinon.assert.called(stateSpy);
    });
  });


  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<DriveLicenceInput
        parent={PARERNT_MOCK}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({ value: PARERNT_MOCK });
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.find('RemoveButton').at(0).simulate('click');

      sinon.assert.called(stateSpy);
    });
  });
  describe('componentWillReceiveProps()', () => {

    it("should casll setState", () => {

      const validation = { parentNameValid: true };
      const onChange = sinon.spy();

      const wrapper = mount(<DriveLicenceInput
        parent={PARERNT_MOCK}
        validation={validation}
        onChange={onChange} />
      );

      wrapper.instance().componentWillReceiveProps({});
      const stateSpy = sinon.spy(wrapper.instance(), 'setState');

      wrapper.find('RemoveButton').at(0).simulate('click');

      sinon.assert.called(stateSpy);
    });
  });


});




const PARERNT_MOCK = {
  id: '1',
  number: 'name',
  issueAt: '12/12/1212'
};
