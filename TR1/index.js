/*Al presionar el botón mostrar en un párrafo los nùmeros del -50 al 50 (un número por línea).

Aplicar while, luego do-while y luego for.*/

$("#Calcular").click(TomarDatos);

function TomarDatos() {
    let i = -50;
  
    while (i < 50) {
    $("#mensaje").append(i + "<br>");
      i++;
    }

    do{
        $("#mensaje").append(i + "<br>");
        i++;
    }while(i < 51)

    for(i; i <= 50; i ++){
        $("#mensaje").append(i + "<br>");
    }
}


    
    

   

