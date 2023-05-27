$("#Calcular").click(TomarDatos);

function TomarDatos() {

   $("#mensaje").append("");

    for (let i = 0; i < 4; i++){
        if(i == 1 || i == 2 ){
            $("#mensaje").append("O &nbsp &nbsp &nbsp &nbsp O <br>" ); 
        }
        else{
           $("#mensaje").append("O O O O <br>" ); 
        }
    }
}

