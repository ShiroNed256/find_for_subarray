import MatrixStore from "./MatrixStore"
import {makeAutoObservable} from 'mobx'

class mainStore {
    Matrix
    Submatrix
    constructor() {
        makeAutoObservable(this)
    }

    initMatrix(rows, cols) {
        this. Matrix = new MatrixStore(rows, cols)
    }

    initSubmatrix(rows, cols) {
        this.Submatrix = new MatrixStore(rows, cols)
    }

}

const mainStore = new mainStore