import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import RainbowButton from "../src/02/RainbowButton";

// A button which will change the background to a different color on click

describe.only("Component: Rainbow", function() {

  xit("has a button element", function() {
    const wrapper = shallow(<RainbowButton />);
    expect(wrapper.find("button")).to.have.length(1);
  });

  xit("has a div with className `content`", function() {
    const wrapper = shallow(<RainbowButton />);
    expect(wrapper.find("div.content")).to.have.length(1);
  });

  xit("the content div has an inline background style", function() {
    const wrapper = shallow(<RainbowButton />);
    expect(wrapper.html().includes('<div style="background-color:pink;" class="content">')).to.equal(true);
  });

  xit("there is a state `color` that's initiliazed as purple", function() {
    const wrapper = shallow(<RainbowButton />);
    expect(wrapper.state().color).to.equal('purple');
  });

  xit("changes the state `color` on click", function() {
    const wrapper = shallow(<RainbowButton />);
    const prevState = wrapper.state().color;
    wrapper.find("button").simulate("click");

    expect(wrapper.state().color).to.not.equal(prevState);
  });
});

