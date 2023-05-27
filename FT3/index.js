/*Crear una función calcularPerimetroDelRectangulo, que reciba como parámetro base y altura.
Deberá devolver el perímetro del rectángulo.
Se debe validar que ambos valores sean numéricos positivos, en caso contrario devolver -1.*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let base = Number($("#base").val());
    let altura = Number($("#altura").val());

    $("#mensaje").html(calcularPerimetroDelRectangulo(base,altura))

}

 function calcularPerimetroDelRectangulo(base,altura){

    if(base < 0 || altura < 0){
        return -1;
    }
   return (2*(base+altura));

}





