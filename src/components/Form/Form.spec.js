import React from "react";
import Form from "./Form";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { rootReducer } from '../../redux/reducers/rootreducer';
import { createStore } from "redux";

Enzyme.configure({ adapter: new Adapter() });

it("should render Form", () => {
  const store = createStore(rootReducer);

  const component = shallow(<Form
    store={store}
    titleForm="1"
    titleButton="lkfsdlds"
    placeholderTel="gsdfgsb"
    placeholderEmail="gsvdfgsfb"
    placeholderName="dbgdfsfhdb*"
    description="gdftghdfgfdgs"
    conditions="gsfdgdfgpdklg"
  />)
  
  expect(component.children().dive().find('.form').length).toBe(1)
  expect(component.children().dive().find('.form__button').length).toBe(1)
  expect(component.children().dive().find('.form__inputs').length).toBe(1)
  expect(component.children().dive().find('.form__input').length).toBe(3)
});

