import { BlobOptions } from "buffer"

export default class DorModel{
    public _number : number | undefined // # fala que o atributo eh um atributo privado
    public _sorted : boolean | undefined
    public _active : boolean | undefined
    public _opened : boolean | undefined
    
    constructor(num: number | undefined,sorted=false,active=false,opened=false){
        this._number = num
        this._sorted = sorted
        this._active = active
        this._opened = opened
    }

    get number(){
        return this._number
    }
    get sorted(){
        return this._sorted
    }
    get active(){
        return this._active
    }
    get opened(){
        return this._opened
    }
    open(){
        const opened = true
        return new DorModel(this._number,this._sorted,this._active,opened)

    }
    unactivate(){
        const acttive = false
        return new DorModel(this._number,this._sorted,acttive,this._opened)

    }
    toggleActive(){
        const acttive = !this._active
        return new DorModel(this._number,this._sorted,acttive,this._opened)

    }
}