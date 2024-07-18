export default class CL_Vendedores{
    constructor(){
        this.acumventasmayoristas=0;
        this.mayorventa=0;
    }

    procesarvendedores(ve){
        if(ve.tipo===1){
            this.acumventasmayoristas+=ve.montoventa
        };
        
        if(ve.tipo===1 && this.mayorventa<ve.montoventa){
            this.mayorventa=ve.montoventa

        }

        }

    }


