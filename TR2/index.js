/*Imprimir en un párrafo los números múltiplos de 5 que hay  entre 1 y 450 inclusive.*/

$("#Calcular").click(TomarDatos);

function TomarDatos() {
  
    for(let i = 1; i <= 450; i ++){
        if(i % 5 == 0){
            $("#mensaje").append(i + " , ");
        }
    }

    
}


    
    

   

