import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import List from '../src/01/List';

describe("Component: List", function() {

  xit("contains a div with class `content`", function() {
    expect(shallow(<List />).find("div.content")).to.have.length(1);
  });

  xit("has an input field", function() {
    expect(shallow(<List />).find("input")).to.have.length(1);
  });

  xit("has a button with text `Submit`", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.find("button")).to.have.length(1);
    expect(wrapper.find("button").first().text()).to.equal("Submit");
  });

  xit("has a state `names` which is initialized as an empty array", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.state().names).to.be.instanceOf(Array);
    expect(wrapper.state().names.length).to.equal(0);
  });

  xit("has a state `current` which is initialized as an empty string", function() {
    const wrapper = shallow(<List />);
    expect(wrapper.state().current).to.equal("");
  });

  xit("the input field has an onChange event listener", function() {
    const inputField = shallow(<List />).find("input");
    expect(inputField.props().onChange).to.be.instanceOf(Function);
  });

  xit("submitting text in the input field adds to the state", function() {
    const wrapper = mount(<List />);
    const name = "Mariko";
    wrapper.setState({ current: name })

    wrapper.find("button").simulate("click");

    expect(wrapper.state().names.length).to.equal(1);
    expect(wrapper.state().names[0]).to.equal(name);
  });

  xit("given state `current` is empty, it renders an h1", function() {
    const wrapper = mount(<List />);

    expect(shallow(<List />).find("div.content")).to.have.length(1);
    expect(wrapper.find("div.content")).to.have.length(1);
    expect(wrapper.find("div.content").text()).to.include("Nothing here yet :(");
  });

  xit("renders submitted text", function() {
    const wrapper = mount(<List />);
    const name = "Mariko";
    wrapper.setState({ names: [name] })

    expect(shallow(<List />).find("div.content")).to.have.length(1);
    expect(wrapper.find("div.content")).to.have.length(1);

    expect(wrapper.find("div.content").text()).to.not.include("Nothing here yet :(");
    expect(wrapper.state().names.length).to.equal(1);
    expect(wrapper.find("div.content").text()).to.include(name);
  });

  xit("renders all submitted text", function() {
    const wrapper = mount(<List />);
    let name = "Mariko";
    wrapper.setState({ names: [name] })

    expect(shallow(<List />).find("div.content")).to.have.length(1);
    expect(wrapper.find("div.content")).to.have.length(1);

    expect(wrapper.find("div.content").text()).to.not.include("Nothing here yet :(");
    expect(wrapper.state().names.length).to.equal(1);
    expect(wrapper.find("div.content").text()).to.include(name);

    let name2 = "Ted";
    wrapper.setState({ names: [name, name2] });

    expect(wrapper.find("div.content").text()).to.include(name);
    expect(wrapper.find("div.content").text()).to.include(name2);
  });
});
