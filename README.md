# SLAE Gauss Solver Unit Testing (Test Doubles with Sinon)

This repository demonstrates the usage of **Test Doubles** (Spies, Stubs, and Mocks) to isolate dependencies during unit testing of a Gaussian Elimination SLAE Solver.

## Core Concepts Tested

- **Sinon Spy**: Monitoring calls, arguments, and frequency of `Matrix.prototype.get`.
- **Sinon Stub**: Simulating zero-pivot conditions by forcing controlled return values to cover row-swapping branches.
- **Sinon Mock**: Enforcing strict interaction rules for `scaleRow` and `addRows` methods.

## Tech Stack

- **Runtime**: Node.js
- **Test Runner**: Mocha
- **Assertion Framework**: Chai with `sinon-chai` plugin
- **Mocking Library**: Sinon.js

## Run Tests

```bash
npm install
npm test
