import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SimpleForm from '../src/03/SimpleForm';

const stub = () => {};

const setup = (customProps = {}) => {
  const props = Object.assign({}, {
    title: 'Add new song',
    inputFieldPlaceholder: 'Enter your favorite song...',
    onSubmit: stub
  }, customProps);

  return mount( <SimpleForm {...props} />);
}

describe('Component: SimpleForm', () => {

  xit('renders the title', ()=> {
    const component = setup();

    const title = component.props().title;
    expect(component.text()).to.include(title);
  });

  xit('renders a button', ()=> {
    const component = setup();

    expect(component.find('button')).to.have.length(1);
  });

  xit('renders an input field and corresponding label', ()=> {
    const component = setup();

    expect(component.find('input').props().id).to.equal('add-new-song');
    expect(component.find('input').props().type).to.equal('text');

    expect(component.find('label')).to.have.length(1);
    expect(component.find('label').props().htmlFor).to.equal('add-new-song');
    expect(component.find('label').props().children).to.equal(component.props().title);
  });

  describe('when submitted', () => {

    describe('and the input field is empty', ()=> {

      xit('there\'s a placeholder in the input field', ()=> {
        const component = setup();

        const placeholder = component.props().inputFieldPlaceholder;
        expect(component.find('input').props().placeholder).to.equal(placeholder);
      });

      xit('the button is disabled', ()=> {
        const component = setup();

        expect(component.find('button').node.disabled).to.be.true;
      });

    });

    describe('and the input field is not empty', () => {
      let component, onSubmitSpy;

      beforeEach(() => {
        onSubmitSpy = sinon.spy();
        component = setup({
          onSubmit: onSubmitSpy,
        });
      });

      xit('the onSubmit function is called', ()=> {
        const value = 'Survivor';

        component.find('input').simulate('change', { target: { value: value }})
        component.find('button').simulate('click');

        expect(onSubmitSpy.calledWith(value)).to.be.true;
      });

    });
  });
});
