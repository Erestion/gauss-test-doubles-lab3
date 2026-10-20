class Matrix {
  constructor(data) {
    this.data = data.map(row => [...row]);
    this.rows = data.length;
    this.cols = data[0].length;
  }

  get(i, j) {
    return this.data[i][j];
  }

  set(i, j, value) {
    this.data[i][j] = value;
  }

  swapRows(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  scaleRow(i, scalar) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] *= scalar;
    }
  }

  addRows(sourceRow, targetRow, scalar) {
    for (let j = 0; j < this.cols; j++) {
      this.data[targetRow][j] += this.data[sourceRow][j] * scalar;
    }
  }
}

module.exports = Matrix;