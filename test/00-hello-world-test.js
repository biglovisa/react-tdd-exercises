import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HelloWorld from '../src/00/HelloWorld';

describe("Component: Hello World", function() {

  it("contains a div with class `hello-world`", function() {
    expect(shallow(<HelloWorld />).find("div.hello-world")).to.have.length(1);
  });

  it("contains an h1 tag", function() {
    expect(shallow(<HelloWorld />).find('h1')).to.have.length(1);
  });

  it("contains the text `Hello, World!`", function() {
    expect(shallow(<HelloWorld />).text()).to.equal('Hello, World!');
  });
});
