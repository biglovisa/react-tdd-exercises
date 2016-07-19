# React TDD examples

A repository with test suites for React components.  

Testing tools: [Enzyme](http://airbnb.io/enzyme/), [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/)

- [Contributing Guidelines](docs/contributing-guidelines.md) :gift_heart:
- [Up and running](https://github.com/applegrain/react-tdd-exercises/blob/master/README.md#up-and-running)
- [How-to](https://github.com/applegrain/react-tdd-exercises/blob/master/README.md#how-to)
- [Running the tests](https://github.com/applegrain/react-tdd-exercises/blob/master/README.md#running-the-tests)
- [Browser debugging](https://github.com/applegrain/react-tdd-exercises/blob/master/README.md#browser-debugging)
- [About the tools](https://github.com/applegrain/react-tdd-exercises/blob/master/README.md#about-the-tools)

---

## Up and running

In your terminal, clone the repository and install the dependencies:

```sh
$ git clone git@github.com:applegrain/react-tdd-exercises.git
$ cd react-tdd-exercises
$ npm install
```

---

## How-to

In `./test` there are enumerated test suites, and every test in the suites are skipped. Work with one test suite at a time, starting with `00-hello-world`. Unskip one test at a time and write code to make it pass.

---

## Running the tests

To run the entire test suite:

```sh
$ npm test
```

To run a specific test, chain the `.only()` function call to your `it` block.

```javascript
it.only("contains a div with class `hello-world`", function() {
    expect(shallow(<HelloWorld />).contains(<div className="hello-world" />)).to.equal(true);
  });
```

The same applies for `describe` block:

```javascript
describe.only("Component: Hello World", function() {

  ...

});
```

To exclude some tests or test suites from running with the entire test suite, add the `.skip()` call to either `it` or `describe` blocks.

You can also add prepend `it` and `describe` blocks with an `x`:

```javascript
describe.only("Component: Hello World", function() {

  xit.only("contains a div with class `hello-world`", function() {
      expect(shallow(<HelloWorld />).contains(<div className="hello-world" />)).to.equal(true);
  });

});
```

---

## Browser debugging

If you want to debug your component from the browser, open `src/index.js` and change the imported component on line 4 to the one you are working with. Then, run `webpack` from your browser to bundle your code, and then open `index.html`.

From your terminal, run:

```sh
$ webpack
$ open index.html
```

---

## About the tools

* [React](https://facebook.github.io/react/):  a rendering library
* [Enzyme](http://airbnb.io/enzyme/): a testing utility library for React
* [Mocha](https://mochajs.org/): a JavaScript testing framework
* [Chai](http://chaijs.com/): a JavaScript assertion library
