import React from 'react';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerListContainer from '../index'
import CustomerList from '../../../components/lists/CustomerList';


const mockStore = configureMockStore();

const store = mockStore({});

describe('CustomerListContainer />', () => {

  it("should init the component", () => {
    const component = shallow(<CustomerListContainer store={store} />);



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
