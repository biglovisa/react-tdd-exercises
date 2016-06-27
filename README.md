# React TDD examples

A repo with pre-written test suites to help practice tdd:ing your UI and React components.

Testing tools: [Enzyme](http://airbnb.io/enzyme/), [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/)

[Contributing Guidelines](docs/contributing-guidelines.md) :gift_heart:

---

## How-to

In the test folder there are enumerated test suites and every test in every test suite is skipped. Work with one test suite at a time, starting with the first one. Unskip one test at a time and write code to make it pass.

If you want to debug your components from the browser, run `webpack` in your terminal and then open `index.html`.

```sh
$ webpack
$ open index.html
```

## Up and running

Clone the repository and install the dependencies:

```sh
$ git clone git@github.com:applegrain/react-tdd-exercises.git
$ cd react-tdd-exercises
$ npm install
```

## Running the tests

To run the entire test suite:

```sh
$ npm test
```

To run a specific test, chain the `.only()` function call to your `it` block.

```js
it.only("contains a div with class `hello-world`", function() {
    expect(shallow(<HelloWorld />).contains(<div className="hello-world" />)).to.equal(true);
  });
```

The same applies for `describe` block:

```js
describe.only("Component: Hello World", function() {

  ...

});
```

To exclude some tests or test suites from running with the entire test suite, add the `.skip()` call to either `it` or `describe` blocks.

## About the tools

* [React](https://facebook.github.io/react/):  a rendering library
* [Enzyme](http://airbnb.io/enzyme/): a testing utility library for React
* [Mocha](https://mochajs.org/): a JavaScript testing framework
* [Chai](http://chaijs.com/): a JavaScript assertion library
