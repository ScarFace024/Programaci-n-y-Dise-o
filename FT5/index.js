/*Construir una función que reciba la nota de cinco evaluaciones (oral, tarea domiciliaria, 
    escrito1, escrito2 y práctico) y retorne el promedio.
Construir otra función que reciba el nombre de la asignatura y el promedio. 
Debe retornar si el estudiante se fúe a exámen o exoneró la asignatura.*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let asig = ($("#asig").val());
    let oral = Number($("#oral").val());
    let td = Number($("#td").val());
    let esc1 = Number($("#esc1").val());
    let esc2 = Number($("#esc2").val());
    let pract = Number($("#pract").val());

    if (oral < 0 || oral > 12 ||td < 0 || td > 12 || esc1 < 0 || esc1 > 12 
        || esc2 < 0 || esc2 > 12 || pract < 0 || pract > 12  ){
            $("#mensaje").html("Nota Incorrecta, ingrese de nuevo");
            exit;
        }
    else{

    let sumap = oral+td+esc1+esc2+pract;
    let nota = promedio(sumap);
   
    

    $("#mensaje").html(" ");
    $("#mensaje").append("Promedio: " + promedio(sumap) + "<br>" );
    $("#mensaje").append(aprobacion(nota,asig)) ;
    }
}

 function promedio(sumap){
    let promedio = sumap / 5;
    return promedio;
 }

 function aprobacion(nota,asig){
    if(nota <= 7){
        return "Materia: " + asig + " Usted se fue a exámen";
    }
    else {
       return "Materia: " + asig + " Usted aprobó la materia";
    }    
 }






