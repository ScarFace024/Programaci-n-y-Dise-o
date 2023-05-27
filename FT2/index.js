/*Implementar la función esMayorAlTope(edad, tope) que reciba una edad y un valor tope, y
retorne true si la edad supera ese tope o false en caso contrario.
Al invocar, mostrar el mensaje “es mayor al tope” si la función retornó true o el mensaje 
“es menor al tope” si retornó false.*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let edad = Number($("#edad").val());
    let tope = Number($("#tope").val());

    if(esMayorAlTope(edad,tope)){
        $("#mensaje").html("Es mayor al tope");
    }
    else if(!esMayorAlTope(edad,tope)){
        $("#mensaje").html("Es menor al tope");
    }
    
  
}
   

function esMayorAlTope(edad,tope){

    if(edad > tope){
        return true;
    }
    else {
        return false;
    }
}





