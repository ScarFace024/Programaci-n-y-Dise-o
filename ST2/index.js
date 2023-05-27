$("#Calcular").click(ScarFace);

function ScarFace(){
    let texto = ($("#text").val());
    let letra= ($("#letra").val());
    let cant = 0;

    let cont = texto.length;

    for( let i = 0; i <=(cont-1);i++){
        if(texto.charAt(i) == letra){
            cant ++;
        }
    }
    $("#mensaje").html("La letra " + letra + " se repite " + cant + " veces")

}







