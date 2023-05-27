/*Construir una función que reciba la nota de cinco evaluaciones (oral, tarea domiciliaria, 
    escrito1, escrito2 y práctico) y retorne el promedio.
Construir otra función que reciba el nombre de la asignatura y el promedio. 
Debe retornar si el estudiante se fúe a exámen o exoneró la asignatura.*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let año = Number($("#año").val());

    $("#mensaje").html(" ");
    $("#mensaje").html( añob(año) );

}

function añob(año){
if(año % 4 == 0 && año % 100 != 0 || año % 400 == 0){
    return "Año bisiesto";
}
else {
    return "Año no bisiesto";
}
}


 






