import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';


import CustomerRegisterContainer from '../index'

const mockStore = configureMockStore();

const store = mockStore({});

describe('CustomerRegisterContainer />', () => {

  it("should init component", () => {
    const component = shallow(<CustomerRegisterContainer store={store} />);
  });

});
