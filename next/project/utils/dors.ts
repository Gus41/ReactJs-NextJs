import DorModel from "../model/DorModel";

export function createDors
(
    qntd : number, sorted: number
): DorModel[]{
    const arr : DorModel[] = []
    for ( let i = 1 ; i <= qntd ; i ++){
        if(i == sorted){
            arr.push(new DorModel(i,true))
        }else{
            arr.push(new DorModel(i))
        }
    }
    return arr
}

export function updateDors(
    dors : DorModel[], modified : DorModel
) : DorModel[] {
    return dors.map(d=>{
        if(d._number == modified._number){
            return modified
        }
        return d.unactivate()
    })
}