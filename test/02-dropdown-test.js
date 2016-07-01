import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Dropdown from '../src/02/Dropdown';

const noop = () => {};

function setup(customProps = {}) {
  const items = ['item1', 'item2', 'item3'];
  const defaultOption = items[0];
  const props = Object.assign({}, {
    items,
    value: defaultOption,
    onSelect: noop
  }, customProps);
  return mount( <Dropdown {...props} />);
}

describe('Component: Dropdown', () => {
  xit('renders a given selection', () => {
    const component = setup();

    expect(component.find('.dropdown__toggle').text()).to.match(/item1/);
  });

  xit('renders initially with the menu closed', () => {
    const component = setup();

    expect(component.find('.dropdown__menu')).to.have.length(0);
  });

  xit('renders the menu after being clicked', () => {
    const component = setup();

    component.find('.dropdown__toggle').simulate('click');

    expect(component.find('ul.dropdown__menu')).to.have.length(1);
    const dropdownItems = component.find('.dropdown__menu li');
    expect(dropdownItems.at(0).text()).to.match(/item1/);
    expect(dropdownItems.at(1).text()).to.match(/item2/);
    expect(dropdownItems.at(2).text()).to.match(/item3/);
  });

  describe('when an option is selected', () => {
    let component, onSelectSpy;
    beforeEach(() => {
      onSelectSpy = sinon.spy();
      component = setup({
        onSelect: onSelectSpy,
      });
      component.find('.dropdown__toggle').simulate('click');
      component.find('.dropdown__menu li').at(1).simulate('click');
    });

    xit('sets the dropdown\'s value', () => {
      expect(component.find('.dropdown__toggle').text()).to.match(/item2/);
    });

    xit('closes the menu', () => {
      expect(component.find('.dropdown__menu')).to.have.length(0);
    });

    xit('fires a callback with the correct arguments', () => {
      expect(onSelectSpy.calledWith('item2')).to.be.true;
    });
  });

  xit('doesn\'t fire a callback when a user re-picks the currently selected option', () => {
    const onSelectSpy = sinon.spy();
    const component = setup({
      onSelect: onSelectSpy,
    });

    component.find('.dropdown__toggle').simulate('click');
    component.find('.dropdown__menu li').at(0).simulate('click');

    expect(onSelectSpy.calledOnce).to.be.false;
  });
});
