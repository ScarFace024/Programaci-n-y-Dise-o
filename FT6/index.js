$("#Calcular").click(ScarFace);

function ScarFace(){
    let dias = Number($("#dias").val());
    let horas = Number($("#horas").val());
    let ayuda = Number($("#ayuda").val());
    let costo = Number($("#costo").val());
    
    let material = materiales(costo);
    let sueldoF = sueldo(dias,horas,ayuda);

    if (! positivo(dias,horas)){
        $("#mensaje").html("Valores incorrectos, ingrese de nuevo");
        exit;
    }
    else {
        $("#mensaje").html("Costo total del presupuesto: " + "$" + (material + sueldoF));
    }
}

function materiales(costo){
    if(costo > 0){
    let costoF = costo + (costo * 0.10);
    return costoF;
    }
    else{
        return "Valores incorrectos, ingrese de nuevo";
    }
}

function sueldo(dias,horas,ayuda){
    let sueldoE = ((horas * 200) * dias);
    if (ayuda == 1){
        let sueldoA = ((horas * 150) * dias);
        let sueldoT = sueldoE + sueldoA;
        return sueldoT;
    }
    if (ayuda == 2){
        return sueldoE;
    }
}

function positivo(dias,horas){
    if(dias > 0 && horas > 0){
        return true;
    }
    else {
        return false;
    }
}





