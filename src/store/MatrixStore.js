import {makeAutoObservable} from 'mobx'

class MatrixStore {
    matrix = []
    
    constructor(rows = 3, cols = 3) {
        this.matrix = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => 0)
        )
        makeAutoObservable(this)
    }

    setValue(row, col, value) {
        this.matrix[row][col] = value
    }
    
    fillRandom() {
        this.matrix = this.matrix.map(row =>
            row.map(() => Math.floor(Math.random() * 10))
        )
  }
}

const MatrixStore = new MatrixStore