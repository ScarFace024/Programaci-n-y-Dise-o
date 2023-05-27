$("#calcular").click(TomarDatos);

function TomarDatos(){
    
    let dia=($("#dia").val());

    if (dia == "lunes" || dia == "Lunes"){
        $("#igual").html("el dia ingresado es Lunes" );
        $("#desigual").html("");
    }
    else{
        $("#desigual").html("el dia ingresado no es Lunes");
        $("#igual").html("");
    }
   

    
}