import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerRegisterForm from '../index'


describe('CustomerRegisterForm />', () => {

  it("should init component", () => {
    const component = shallow(<CustomerRegisterForm />);
    expect(component.type()).to.be.eql('form');
  });

  it("should NOT submit a invalid form", () => {

    const onSubmitSpy = sinon.spy();

    const wrapper = mount(<CustomerRegisterForm
      editingCustumer={custumerTOEdit}
      onSubmit={onSubmitSpy} />
    );

    wrapper.find('form').simulate('submit');

    expect(wrapper.instance().state.formSubmited).to.eql(true)

    sinon.assert.notCalled(onSubmitSpy);
  });

  it("should submit valid form", () => {

    const onSubmitSpy = sinon.spy();

    const wrapper = mount(<CustomerRegisterForm
      editingCustumer={custumerTOEdit}
      onSubmit={onSubmitSpy} />
    );

    wrapper.instance().validateForm = sinon.stub()
      .withArgs()
      .returns(true);

    wrapper.find('form').simulate('submit');

    sinon.assert.called(onSubmitSpy);
  });

  it("componentWillReceiveProps() - call setState", () => {

    const wrapper = mount(<CustomerRegisterForm editingCustumer={custumerTOEdit} />);

    const stateSpy = sinon.spy(wrapper.instance(), 'setState');

    wrapper.instance().componentWillReceiveProps({ editingCustomer: custumerTOEdit });

    sinon.assert.called(stateSpy);
  });


  it("componentWillReceiveProps() - NOT call setState", () => {

    const wrapper = mount(<CustomerRegisterForm editingCustumer={custumerTOEdit} />);

    const stateSpy = sinon.spy(wrapper.instance(), 'setState');

    wrapper.instance().componentWillReceiveProps({});

    sinon.assert.notCalled(stateSpy);
  });


  it("resetForm()", () => {
    const wrapper = mount(<CustomerRegisterForm editingCustumer={custumerTOEdit} />);

    const stateSpy = sinon.spy(wrapper.instance(), 'setState');

    wrapper.instance().resetForm();

    sinon.assert.called(stateSpy);
  });


  it("handleChanges() - call setState", () => {

    const wrapper = mount(<CustomerRegisterForm editingCustumer={custumerTOEdit} />);

    const stateSpy = sinon.spy(wrapper.instance(), 'setState');

    wrapper.instance().handleChange({ name: 'test', value: { id: 1 } });

    sinon.assert.called(stateSpy);
  });


});


const custumerTOEdit = {
  id: '1',
  name: 'name',
  birthday: 'birthday',
  bornState: '1212-12-12',
  city: 'city',
  parent: {
    id: '1',
    name: 'name',
    phone: {
      code: '22',
      nunber: '2222222',
    },
  },
  location: 'location',
  driver_license: {
    id: '1',
    number: '111111',
    issuedAt: '1212-12-12',
  },
  phones: [],
  emails: [],
};