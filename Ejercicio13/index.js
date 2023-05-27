/*Ejercicio 13: Una nueva ley descuenta un 4% al total de cada compra si el pago se efectua con
tarjeta de crédito o débito y el monto es inferior a los $10.000.
Dado un ingreso de total de compra y si es con tarjeta (“si” o “no”), calcular el total final de la
compra.
Ej.:
Pago de $2000 con tarjeta, costo final → $1920
Pago de $12000 con tarjeta, costo final → $12000
Pago de $3000 sin tarjeta, costo final → $3000*/

$("#calcular").click(TomarDatos);

function TomarDatos(){

    let Monto= Number($("#monto").val())
    let tipoP= Number($("#tipoP").val())

    if(tipoP == 1 && Monto < 10000){
        let monto = Monto - (Monto * 0.04);
        $("#mensaje").html("Pago de " + Monto + " con tarjeta, costo final " + monto);
    }
    if(tipoP == 1 && Monto >= 10000){
        $("#mensaje").html("Pago de " + Monto + " con tarjeta, costo final " + Monto);
    }
    if(tipoP == 2){
        $("#mensaje").html("Pago de " + Monto + " con efectivo, costo final " + Monto);
    }

}

    
    

   

