/*Ingresar nombre de una asignatura, el nombre del estudiante, nombre de la asignatura y notas de 3 evaulacion (teórico, práctico y escrito). 
Calcular el promedio.

Mostrar en un parrafo:
 -Si el estudiante exoneró, de color verde su nombre, el nombre de la asignatura y el promedio.
 -Si se fue a diciembre, de color amarillo, su nombre, el nombre de la asignatura y el promedio.
 -Si se fue a febrero, de color rojo su nombre, el nombre de la asignatura y el promedio.*/

$("#calcular").click(TomarDatos);

function TomarDatos(){

    let asignatura= ($("#asignatura").val())
    let nombre= ($("#nombre").val())
    let escrito= Number($("#escrito").val())
    let teorico= Number($("#teorico").val())
    let practico= Number($("#practico").val())

    let promedio = (escrito + teorico + practico) / 3;

    if(promedio <= 3){
        $("#nombre").css("color", "red");
        $("#febrero").html("Nombre: " + nombre + ", Asignatura: " + asignatura + ", Promedio: " + promedio)
    }

    if(promedio >3 && promedio <= 7){
        $("#nombre").css("color", "yellow");
        $("#diciembre").html("Nombre: " + nombre + ", Asignatura: " + asignatura + ", Promedio: " + promedio)
    }

    if(promedio >7 && promedio <= 12){
        $("#nombre").css("color", "green");
        $("#exonero").html("Nombre: " + nombre + ", Asignatura: " + asignatura + ", Promedio: " + promedio)
    }
}

    
    

   

