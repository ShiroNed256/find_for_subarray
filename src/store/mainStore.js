import MatrixStore from "./MatrixStore"
import {makeAutoObservable} from 'mobx'

class MainStore {
    Matrix
    Submatrix
    
    constructor() {
        this.Matrix = new MatrixStore()
        this.Submatrix = new MatrixStore()
        makeAutoObservable(this)
    }

    initMatrix(rows, cols) {
        this.Matrix = new MatrixStore(rows, cols)
    }

    initSubmatrix(rows, cols) {
        this.Submatrix = new MatrixStore(rows, cols)
    }

}

export const mainStore = new MainStore()