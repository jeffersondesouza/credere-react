import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerList from '../index'


describe('CustomerList />', () => {

  it("should init the component", () => {
    const component = shallow(<CustomerList customers={[]} />);
    expect(component.type()).to.be.eql('ul');
  });


  describe('test list receiving data', () => {

    const costumers = [
      { id: 1 },
      { id: 2 },
      {
        id: 3,
        driver_license: {
          number: 111,
          issued_at: '12/12/1212'
        }
      }
    ];


    it("should init the component with 3 CustomerList", () => {
      const wrapper = mount(<CustomerList customers={costumers} />);
      const list = wrapper.find('CustomerItem');
      expect(list.length).to.eql(3);
    });
  });


  describe('tests EVENTS childs', () => {
    let wrapper;
    const costumers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const onSendToEditSpy = sinon.spy();
    const onSendToDeleteSpy = sinon.spy();

    beforeEach(() => {
      wrapper = mount(
        <CustomerList
          customers={costumers}
          onSendToEdit={onSendToEditSpy}
          onSendToDelete={onSendToDeleteSpy}
        />
      );

    });

    it("when child send ans EDIT event, should call onSendToEdit", () => {
      const customerItem = wrapper.find('CustomerItem').at(0);
      customerItem.find('button').at(0).simulate('click')
      sinon.assert.called(onSendToEditSpy);
    });

    it("when child send ans DELETE event, should call onSendToDelete", () => {
      const customerItem = wrapper.find('CustomerItem').at(0);

      customerItem
        .find('CustomerActions').at(0)
        .find('button').at(1)
        .simulate('click');

      sinon.assert.called(onSendToDeleteSpy);
    });

  });


});

/*

  it("should render SideMenu ", () => {
    expect(component.type()).to.be.eql('div');
  });

  it("should contains the header element", () => {
    const header = shallow(<SideMenuHeader />);
    expect(component.contains(<SideMenuHeader />)).to.true;
  });


  it("should contains the header element text", () => {
    const header = shallow(<SideMenuHeader />);
    expect(component.contains(<SideMenuHeader />)).to.true;
    expect(header.text()).to.contain('e controle seu hábito de le');
  });



  it("should contains the header element text", () => {
    const footer = shallow(<SideMenuFooter />);

  });

  */
