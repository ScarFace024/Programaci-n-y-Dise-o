/*Construir una función que reciba el peso y la estatura de una persona y devuelva el índice de masa corpora.
Construir otra función que reciba el índice de masa corporal y retorne el mensaje que corresponda.*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let peso = Number($("#peso").val());
    let estatura = Number($("#estatura").val());
    let pesoF = IMC(peso,estatura);
    let pesoalt = mensaje(pesoF);

    $("#mensaje").html(" ");
    $("#mensaje").append("Su indice de masa corporal es: " + IMC(peso,estatura) + "<br>");
    $("#mensaje").append( "Informacion: " + pesoalt) ;

}

 function IMC(peso,estatura){
    return (peso/(estatura*estatura)).toFixed(1);
}

function mensaje(pesoF){
    if (pesoF < 18.5){
        return "Bajo peso";
    }
    else if(pesoF >= 18.5 || IMC <= 24.9){
        return "Peso normal";
    }
    else if(pesoF >= 25.0 || IMC <= 29.9){
        return"Sobrepeso";
    }
    else {
        return "Obesidad";
    }
}






