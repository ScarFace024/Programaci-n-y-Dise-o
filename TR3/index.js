/*Ingresar dos nùmeros (dividendo y divisor).

Aplicando solamente restas y estructuras repetitivas, obtener el cociente y 
el resto de la división entera entre el dividendo y el divisor ingresados.*/

$("#Calcular").click(TomarDatos);

function TomarDatos() {
    let dividendo = Number($("#Dividendo").val());
    let divisor = Number($("#Divisor").val());
    let cociente = 0;

    while(dividendo >= divisor){
        dividendo = dividendo - divisor;
        cociente ++;
    }
    let resto = dividendo;
    $("#mensaje").html("El cociente de la division es: " + cociente + " y el resto es : " + resto); 
}

    
    

   

