import CL_Vendedor from "./CL_Vendedor.js";
import CL_Vendedores from "./CL_Vendedores.js";

let vende1=new CL_Vendedor('Mary',1,150);
let vende2=new CL_Vendedor('José',1,135);
let vende3=new CL_Vendedor('Carlos',2,160);
let vende4=new CL_Vendedor('Pedro',2,75);

let vendedores=new CL_Vendedores();

vendedores.procesarvendedores(vende1);
vendedores.procesarvendedores(vende2);
vendedores.procesarvendedores(vende3);
vendedores.procesarvendedores(vende4);

let salida=document.getElementById("salida")
salida.innerHTML="Reporte"
salida.innerHTML+="<br>Monto total de las ventas de los vendedores tipo mayorista: "+vendedores.acumventasmayoristas+"$";
salida.innerHTML+="<br>Monto mayor venta realizada por los vendedores tipo mayorista: "+vendedores.mayorventa+"$";
