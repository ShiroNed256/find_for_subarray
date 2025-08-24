import {makeAutoObservable} from 'mobx'

export default class MatrixStore {
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
            row.map(() => Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase())
        )
  }
}
