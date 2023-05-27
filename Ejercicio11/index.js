/*Ejercicio 12: Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes
condiciones:
• Si los ingresos del comprador son menores de $23.000 el primer pago será del 17% del
costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 10 años.
• Si los ingresos del comprador son $23.000 o más, la cuota inicial será del 35% del costo de
la casa y el resto se distribuirá en pagos mensuales durante 18 meses.
La empresa quiere obtener cuánto debe pagar un comprador por concepto del primer pago y cuánto
por cada pago parcial.*/

$("#calcular").click(TomarDatos);

function TomarDatos(){

    let sueldo=Number($("#ingresos").val());
    let casa=Number($("#casa").val());
    let primerP=0;
    let primerP1=0;
    let cuotas=0;
    
    if (sueldo < 23000){
        primerP= casa + (casa*0.17);
        primerP1= primerP - casa;
        cuotas= (casa - (casa*0.17)) / 120;
        $("#mensaje").html("El pago inicial será de " + primerP1 + ", y el restante en 120 cuotas de " + cuotas);
    }

    if (sueldo >= 23000){
        primerP= casa + (casa*0.35);
        primerP1= primerP - casa;
        cuotas= (casa - (casa*0.35)) / 18;
        $("#mensaje").html("El pago inicial será de " + primerP1 + ", y el restante en 18 cuotas de " + cuotas);
    }

}

    
    

   

