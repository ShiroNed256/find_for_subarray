import MatrixStore from "./MatrixStore"
import {makeAutoObservable} from 'mobx'
import {findSubmatrix} from '../components/helpers/helper'


class MainStore {
    Matrix
    Submatrix
    Result

    constructor() {
        this.Matrix = new MatrixStore()
        this.Submatrix = new MatrixStore()
        this.Result = []
        makeAutoObservable(this)   
    }

    initMatrix(rows, cols) {
        this.Matrix = new MatrixStore(rows, cols)
    }

    initSubmatrix(rows, cols) {
        this.Submatrix = new MatrixStore(rows, cols)
    }
    
    findResult(){
       this.Result = findSubmatrix(this.Matrix.matrix, this.Submatrix.matrix)
    }  
}

export const mainStore = new MainStore()