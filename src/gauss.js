class GaussSolver {
  constructor(matrix) {
    this.matrix = matrix;
  }

  solve() {
    const rows = this.matrix.rows;
    const cols = this.matrix.cols;

    // Forward elimination
    for (let i = 0; i < rows; i++) {
      let pivot = this.matrix.get(i, i);

      if (pivot === 0) {
        for (let k = i + 1; k < rows; k++) {
          if (this.matrix.get(k, i) !== 0) {
            this.matrix.swapRows(i, k);
            pivot = this.matrix.get(i, i);
            break;
          }
        }
      }

      if (pivot !== 0) {
        this.matrix.scaleRow(i, 1 / pivot);
        for (let k = i + 1; k < rows; k++) {
          const factor = -this.matrix.get(k, i);
          this.matrix.addRows(i, k, factor);
        }
      }
    }

    // Back substitution
    const solution = new Array(rows);
    for (let i = rows - 1; i >= 0; i--) {
      let val = this.matrix.get(i, cols - 1);
      for (let j = i + 1; j < rows; j++) {
        val -= this.matrix.get(i, j) * solution[j];
      }
      solution[i] = val;
    }

    return solution;
  }
}

module.exports = GaussSolver;