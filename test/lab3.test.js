const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const { expect } = chai;

const Matrix = require('../src/matrix');
const GaussSolver = require('../src/gauss');

describe('Laboratory Work #3 - Test Doubles (Sinon & Sinon-Chai)', () => {
  let matrix;

  beforeEach(() => {
    // Basic 2x3 matrix: 2x + y = 5, 4x + 2y = 10 -> System of linear equations
    matrix = new Matrix([
      [2, 1, 5],
      [4, 3, 11]
    ]);
  });

  afterEach(() => {
    sinon.restore(); // Clean up spies/stubs/mocks after each test
  });

  describe('1. Sinon Spy - Behavior Inspection', () => {
    it('should spy on matrix.get method calls during solver execution', () => {
      const getSpy = sinon.spy(matrix, 'get');
      const solver = new GaussSolver(matrix);

      solver.solve();

      // Asserting call facts using Sinon-Chai
      expect(getSpy).to.have.been.called;
      expect(getSpy.callCount).to.be.above(0);
      expect(getSpy).to.have.been.calledWith(0, 0);
    });
  });

  describe('2. Sinon Stub - Indirect Input Control', () => {
    it('should force swapRows trigger using a stubbed zero pivot', () => {
      const swapSpy = sinon.spy(matrix, 'swapRows');
      // Force pivot (0,0) to return 0 to trigger row swapping logic
      sinon.stub(matrix, 'get').withArgs(0, 0).returns(0);

      const solver = new GaussSolver(matrix);
      solver.solve();

      expect(swapSpy).to.have.been.calledOnceWith(0, 1);
    });
  });

  describe('3. Sinon Mock - Strict Interaction Protocol', () => {
    it('should verify expected method invocations via Mock', () => {
      const mockMatrix = sinon.mock(matrix);

      // Expectations setup
      mockMatrix.expects('scaleRow').atLeast(1);
      mockMatrix.expects('addRows').atLeast(1);

      const solver = new GaussSolver(matrix);
      solver.solve();

      // Verify all programmed expectations were satisfied
      mockMatrix.verify();
    });
  });
});