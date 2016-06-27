import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import List from '../src/01/List';

describe.only("Component: List", function() {

  it("contains a div with class `list`", function() {
    expect(shallow(<List />).find("div.list")).to.have.length(1);
  });

  it("has an input field", function() {
    expect(shallow(<List />).find("input")).to.have.length(1);
  });

  it("has a button with text `Submit`", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.find("button")).to.have.length(1);
    expect(wrapper.find("button").first().text()).to.equal("Submit");
  });

  it("has a state `names` which is initialized as an empty array", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.state().names).to.be.instanceOf(Array);
    expect(wrapper.state().names.length).to.equal(0);
  });

  it("has a state `current` which is initialized as an empty string", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.state().current).to.equal("");
  });

  it("the input field has an onChange event listener", function() {
    const inputField = shallow(<List />).find("input");
    expect(inputField.props().onChange).to.be.instanceOf(Function);
  });

  it("submitting text in the input field adds to the state", function() {
    const wrapper = mount(<List />);
    const name = "Mariko";
    wrapper.setState({ current: name })

    wrapper.find("button").simulate("click");

    expect(wrapper.state().names.length).to.equal(1);
    expect(wrapper.state().names[0]).to.equal(name);
  });
});
