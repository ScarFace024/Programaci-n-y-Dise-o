
/*Ejercicio 10: Ingresar un código de departamento y mostrar en un párrafo el nombre del
departamento que le corresponde.
AA – Canelones BB – Maldonado CC – Rocha DD – Treinta y Tres EE – Cerro Largo
FF – Rivera GG – Artigas HH – Salto II – Paysadú JJ – Río Negro
KK – Soriano LL – Colonia MM – San José NN – Flores OO – Florida
PP – Lavalleja QQ – Durazno RR – Tacuarembó SS – Montevideo

Mensaje por defecto a mostrar: "Error, el código no corresponde a un departamento."*/

$("#calcular").click(TomarDatos);

function TomarDatos(){

    let CodigoD=($("#codigo").val());
    switch(CodigoD){
        case "aa": $("#mensaje").html("Canelones") 
        break;
        case "bb": $("#mensaje").html("Maldonado") 
        break;
        case "cc": $("#mensaje").html("Rocha") 
        break;
        case "dd": $("#mensaje").html("Treinta y Tres") 
        break;
        case "ee": $("#mensaje").html("Cerro Largo") 
        break;
        case "ff": $("#mensaje").html("Rivera") 
        break;
        case "gg": $("#mensaje").html("Artigas") 
        break;
        case "hh": $("#mensaje").html("Salto") 
        break;
        case "ii": $("#mensaje").html("Paysandú") 
        break;
        case "jj": $("#mensaje").html("Río Negro") 
        break;
        case "kk": $("#mensaje").html("Soriano") 
        break;
        case "ll": $("#mensaje").html("Colonia") 
        break;
        case "mm": $("#mensaje").html("San José") 
        break;
        case "nn": $("#mensaje").html("Flores") 
        break;
        case "oo": $("#mensaje").html("Forida") 
        break;
        case "pp": $("#mensaje").html("Lavalleja") 
        break;
        case "qq": $("#mensaje").html("Durazno") 
        break;
        case "rr": $("#mensaje").html("Tacurembó") 
        break;
        case "ss": $("#mensaje").html("Montevideo") 
        break;
        default: $("#mensaje").html("Error, el código no corresponde a un departamento.")

    }
}
