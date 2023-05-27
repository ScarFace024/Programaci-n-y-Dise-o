$("#calcular").click(TomarDatos);

function TomarDatos(){

    let tipoC= Number($("#tipoCl").val());
    let Millas= Number($("#millas").val());

    if( tipoC == "1"){

        $("#1").html(Millas)
    if (Millas >= 15000 && Millas <= 29999 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a America del Sur")    
        }
        if (Millas >= 30000 && Millas <= 59999 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a America del Norte y America del Sur") 
        }
        if (Millas >= 60000 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a Europa") 
        }
        if (Millas < 15000){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y no puede viajar a ningun lado") 
        }
    
    }
   

    if( tipoC == "2"){

        Millas=Millas*2;

        $("#1").html(Millas)
    if (Millas >= 15000 && Millas <= 29999 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a America del Sur")    
        }
        if (Millas >= 30000 && Millas <= 59999 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a America del Norte y America del Sur") 
        }
        if (Millas >= 60000 ){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y puede viajar a Europa") 
        }
        if (Millas < 15000){
            $("#1").html("Usted es cliente Normal, tiene " + Millas + " millas y no puede viajar a ningun lado") 
        }
    
    }

    
}
