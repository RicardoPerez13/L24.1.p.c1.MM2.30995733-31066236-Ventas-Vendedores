export default class CL_Vendedor{
    constructor(n,t,m){
        this.nombre=n;
        this.tipo=t;
        this.montoventa=m;
    }
    set nombre(no){
        return this._nombre=no;
        }
        
        get nombre(){
        return this._nombre;
        }

        set tipo(ti){
            return this._tipo=ti;
            }
            
            get tipo(){
            return this._tipo;
            }
    
    set montoventa(mo){
         return this._montoventa=mo;
        }
            
    get montoventa(){
        return this._montoventa;
        }


}