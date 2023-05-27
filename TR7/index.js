$("#Calcular").click(ScarFace);

function ScarFace(){

    let mes = $("#mes").val();
    let diaSemana = $("#dia").val();
    let diasMes = diasDelMes(mes);
    let dia = comienzoMes(diaSemana);
    let meses = mesA(mes);

    $("#mensaje").html(" ");
    $("#mensaje").append("<h1 class='mes'>" + meses + "</h1>");
    $("#mensaje").append("<table id='tabla'></table>");
    $("#tabla").append('<tr><th class="header">lun</th><th class="header">mar</th><th class="header">mie</th><th class="header">jue</th><th class="header">vie</th><th class="header">sab</th><th class="header">dom</th>');
    
    for(let i=0 ; i < 6 ; i++){
        $("#tabla").append('<tr id="fila' + i + '"></tr>');

        for(let j=0 ; j < 7 ; j++){
            if(dia < 1){
                $("#fila" + i).append('<td class="empty"></td>');
            } else {
                $("#fila" + i).append('<td class="dias">' + dia + '</td>');
            }
            
            if(dia < diasMes && dia !== ""){
                dia++;
            }else{
                dia="";
            }
        }
    }
}

function mesA(mes){
    let mes1;
    switch(mes){
        case "1":
            mes1 = "ENERO";
            break;
        case "2":
            mes1 = "FEBRERO";
            break;
        case "3":
            mes1 = "MARZO";
            break;
        case "4":
            mes1 = "ABRIL";
            break;
        case "5":
            mes1 = "MAYO";
            break;
        case "6":
            mes1 = "JUNIO";
            break;
        case "7":
            mes1 = "JULIO";
            break;
        case "8":
            mes1 = "AGOSTO";
            break;
        case "9":
            mes1 = "SEPTIEMBRE";
            break;
        case "10":
            mes1 = "OCTUBRE";
            break;
        case "11":
            mes1 = "NOVIEMBRE";
            break;
        case "12":
            mes1 = "DICIEMBRE";   
    }

    return mes1;
}

function diasDelMes(mes){
    let dias = 0;

    switch(mes){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            dias = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "n11":
            dias = 30;
            break;
        case "2":
            dias = 28;
    }

    return dias;
}

function comienzoMes(diaSemana){
    let d = -6;
    switch(diaSemana){
        case "1":
            d = 1;
            break;
        case "2":
            d = 0;
            break;
        case "3":
            d = -1;
            break;
        case "4":
            d = -2;
            break;
        case "5":
            d = -3;
            break;
        case "6":
            d = -4;
            break;
        case "7":
            d = -5;
            break;
    }
    return d;
}
    

   


