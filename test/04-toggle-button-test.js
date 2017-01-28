import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ToggleButton from '../src/04/ToggleButton';

const createComponent = (customProps = {}) => {
  const props = Object.assign({}, {
    onClick: () => {}
  }, customProps);

  return shallow( <ToggleButton {...props} />);
}

describe('Component: ToggleButton', () => {
  describe('when it renders with default props', () => {
    let component;
    beforeEach(() => {
      component = createComponent();
    });

    xit('contains two buttons', () => {
      expect(component.find('button')).to.have.length(2);
    });

    xit('specifies which button is to the left', () => {
      expect(component.find('button.toggle-button-left')).to.have.length(1);
    });

    xit('specifies which button is to the right', () => {
      expect(component.find('button.toggle-button-right')).to.have.length(1);
    });

    xit('has a label', () => {
      expect(component.find('label.toggle-label')).to.have.length(1);
    });

    xit('renders child elements with text content', () => {
      component.children().nodes.forEach(node => expect(typeof node.props.children).to.equal('string'));
    });

    xit('toggles to false', () => {
      expect(component.state().toggleOn).to.equal(false)
    });

    xit('changes toggleOn state onClick', () => {
      component.simulate('click');
      expect(component.state().toggleOn).to.equal(true)
      component.simulate('click');
      expect(component.state().toggleOn).to.equal(false)
    })
  });

  describe('when it renders with custom props', () => {
    const exampleString = "Hello World!"

    xit('and label text is given', () => {
      const component = createComponent({ labelText: exampleString });
      expect(component.find('.toggle-label').props().children).to.equal(exampleString);
    });

    xit('and button texts are given', () => {
      const buttonText = { left: `${exampleString}-left`, right: `${exampleString}-right` };
      const component = createComponent({ buttonText });

      Object.keys(buttonText).forEach(direction => {
        expect(component.find(`button.toggle-button-${direction}`).props().children).to.equal(`${exampleString}-${direction}`);
      });
    });

    xit('and selected option is given', () => {
      const component = createComponent({ toggleOn: true })
      expect(component.state().toggleOn).to.equal(true)
    })

    xit('is disabled when disabled property is given', () => {
      const component = createComponent({ disabled: true })
      console.log(component.props)
      expect(component.props().disabled).to.eq(true)
    })
  });
});
