/*En el html crear la etiqueta Ingrese con su correspondiente campo de texto. Además, crear un boton con value ACEPTAR.

Se pide:

Cada vez que el usuario ingrese una vocal el value del botón cambiará a ENTRAR.
Cuándo el usuario ingrese una consonante el boton quedará deshabilitado.*/

$("#Calcular").click(TomarDatos);

function TomarDatos(){

    let letra = ($("#letra").val())

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ){
        $("#Calcular").attr("value" , "ENTER");
    }

    else{
        $("#Calcular").attr("disabled" , "disabled");
    }

}

    
    

   

