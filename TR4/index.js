$("#Calcular").click(TomarDatos);

function TomarDatos() {
    let ancho = Number($("#ancho").val());
    let alto = Number($("#alto").val());
    ancho = ancho -1;

    $("#mensaje").html("");

    for (let i = 0; i < alto; i++){
        for (let a = 0; a < ancho; a ++){
            $("#mensaje").append("*" );
        }
    $("#mensaje").append("* <br>" ); 
    }
}


